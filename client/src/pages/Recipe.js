import {useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box,Button, FormField, Input, Label, Textarea } from "../styles";
import Comment from "./Comment.js"
import NewComment from "./NewComment.js"

function Recipe({user, recipe, onRemoveRecipe, onUpdateRecipe}) {
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const [showForm, setShowForm] = useState(false)

// const [isLoading, setIsLoading] = useState(false);

//for the edit recipe form
const [name, setName] = useState(recipe.name);
const [image, setImage] = useState(recipe.image);
const [category, setCategory] = useState(recipe.category);
const [description, setDescription] = useState(recipe.description);
const [instructions, setInstructions] = useState(recipe.instructions);
const [ingredients, setIngredients] = useState(recipe.ingredients);

const [showEdit, setShowEdit] = useState(false);
const [errors, setErrors] = useState([]);

//Show comments for the recipe when show comment button is clicked
function handleComments() {
    if(showComments == false){
    fetch(`/recipes/${recipe.id}`)
    .then(resp => resp.json())
    .then(data => setComments(data.comments))

    }
    else{
      console.log("changing to none")
      setComments([])
      
    }
    setShowComments(!showComments)
}

//creates new comment

function handleNew(){
    setShowForm(!showForm)
}
 //delete recipe method
 function handleDelete(e) {
    // e.preventDefault()
    fetch(`/recipes/${recipe.id}`, { method: "DELETE", })
    .then((r) => {
      if (r.ok) {
        onRemoveRecipe(recipe);
      } else {
        r.json().then((err) => alert(err.error));
      }})
    }
//Edit recipe
    function handleEdit(e){
      //updating recipe
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
          "user_id": user.id   }
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
      <Button variant="outline" onClick = {() => setShowEdit(!showEdit)}>Edit Recipe</Button>
      
      <h2>{recipe.name}</h2>
      <img  src ={recipe.image} width="400" height="500" alt = {recipe.name}/>
      <p>
        <b>Category: {recipe.category}</b>
        &nbsp;·&nbsp;
        <cite>By {user.username}</cite>
      </p>
      <p><b>Description</b>: {recipe.description}</p>
      <b>Ingredients:</b>
      <ReactMarkdown>{recipe.ingredients}</ReactMarkdown>
      <b>Instructions</b>
      <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
      <Button onClick= {handleComments}>{showComments ? "Hide Comments": "Show Comments"}</Button>
    
      <div >
        <ul > {comments.map(comment => <Comment myComment={comment} user ={user} recipe = {recipe} setComments= {setComments} comments = {comments} key ={comment.id} />)} </ul>
      </div>
      {!showComments ? 
      <Button id="newR" onClick = {handleNew}>New Comment</Button> : <p></p>}
      {showForm ? <NewComment user = {user} recipe = {recipe} setComments = {setComments}/> : ""} 
      

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
          <select id="selectform" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Cookies">Cookies</option>
            <option value="Bars">Bars</option>
            <option value="Cakes">Cakes</option>
            <option value="Breads">Breads</option>
            <option value="Other">Other</option>
          </select>
           
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
              {isLoading ? "Loading..." : "Finish Edit"}
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