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
    <Wrapper>
      <WrapperChild>
        <h2>Create Recipe</h2>
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
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewRecipe;
