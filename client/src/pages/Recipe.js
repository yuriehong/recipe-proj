import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box,Button, FormField, Input, Label, Textarea } from "../styles";

function Recipe({recipe, onRemoveRecipe, onUpdateRecipe}) {

const [isLoading, setIsLoading] = useState(false);

//for the edit recipe form
const [name, setName] = useState(recipe.name);
const [image, setImage] = useState(recipe.image);
const [category, setCategory] = useState(recipe.category);
const [description, setDescription] = useState(recipe.description);
const [instructions, setInstructions] = useState(recipe.instructions);
const [ingredients, setIngredients] = useState(recipe.ingredients);
const [user, setUser] = useState(recipe.user);

const [showEdit, setShowEdit] = useState(false);
const [errors, setErrors] = useState([]);

 //delete recipe method
 function handleDelete(e) {
    e.preventDefault()
    fetch(`/recipes/${recipe.id}`, { method: "DELETE", })
    .then((r) => {
      if (r.ok) {
        onRemoveRecipe(recipe);
      } else {
        r.json().then((err) => alert(err.error));
      }})
    }

    function handleEdit(e){
      //updating review
      e.preventDefault()
      fetch(`/recipes/${recipe.id}`, { 
      method : "PATCH",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(
        { name,
          image,
          category,
          description,
          ingredients,
          instructions,
         user   }
      )})
    .then((r) => {
      if (r.ok) {
        onUpdateRecipe();
        setShowEdit(!showEdit)
      } else {
        r.json().then((err) => alert(err.error));
      }})
    }

return (
    <Rec key={recipe.id}>
    <Box>
      <Button onClick ={() => handleDelete()}>Delete</Button>
      <Button onClick = {() => setShowEdit(!showEdit)}>Edit Recipe</Button>
      
      <h2>{recipe.name}</h2>
      <img  src ={recipe.image} width="500" height="500" alt = {recipe.name}/>
      <p>
        <em>Category: {recipe.category}</em>
        &nbsp;·&nbsp;
        {/* <cite>By {recipe.user}</cite> */}
      </p>
      <p><em>Description</em>: {recipe.description}</p>
      <ReactMarkdown>{recipe.ingredients}</ReactMarkdown>
      <ReactMarkdown>{recipe.instructions}</ReactMarkdown>

      {showEdit ? <div>
      <form onSubmit={handleEdit}>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="image">Image URL</Label>
            <Input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="category">Category</Label>
            <Input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="ingredients">Ingredients</Label>
            <Textarea
              id="ingredients"
              rows="10"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Recipe"}
            </Button>
          </FormField>
          <FormField>             
      {errors? <div>{errors}</div>:null}
          </FormField>
        </form>  </div>: <p></p>}
    </Box>
  </Rec>


)

}
const Rec= styled.article`
  margin-bottom: 24px;
`;
export default Recipe