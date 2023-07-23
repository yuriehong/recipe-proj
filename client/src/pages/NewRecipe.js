import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label, Textarea } from "../styles";

function NewRecipe({ user }) {
  const [name, setName] = useState("Recipe title");
  const [image, setImage] = useState("Image url");
  const [category, setCategory] = useState("Recipe Category");
  const [description, setDescription] = useState("Recipe Description");
  const [instructions, setInstructions] = useState("Instructions");
  const [ingredients, setIngredients] = useState("Ingredients");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        category,
        description,
        ingredients,
        instructions,
      "user_id": user.id      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/")        
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }

  return (
    <Background>
    <Wrapper>
      <WrapperChild>
        <NewTitle id="newRecipe">
          <u>Create Recipe</u>
          </NewTitle>
        <form onSubmit={handleSubmit}>
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
            <Label htmlFor = "category">Category</Label>
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
              {isLoading ? "Loading..." : "Submit Recipe"}
            </Button>
          </FormField>
          <FormField>             
      {errors? <div>{errors}</div>:null}
          </FormField>
        </form>
      </WrapperChild>
      
    </Wrapper>
    </Background>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
  background-color: lightgrey
 
`;
const NewTitle= styled.h2`
  font-family: "Comic Sans";
  font-size: 2rem;
  color: black;
  display: flex;
  margin-left: 265px;
  
`;
const Background = styled.section`
  background: url("https://images.unsplash.com/photo-1681725142773-5756fad63e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") center 
 
`;


const WrapperChild = styled.div`
  flex: 1;
`;

export default NewRecipe;
