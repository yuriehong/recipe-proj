import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

//get recipes
  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

 //delete recipe method
  function handleDelete(id) {
    fetch(`/recipes/${id}`, { method: "DELETE" })
    .then(res => res.json())
    .then(res => console.log(res)) 

    // fetch("/recipes")
    //     .then((r) => r.json())
    //     .then(setRecipes);
    
  }

  return (
    <Wrapper>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Recipe key={recipe.id}>
            <Box>
              <Button onClick = {handleDelete(recipe.id)}>Delete</Button>
              <Button>Edit Recipe</Button>
              <h2>{recipe.name}</h2>
              <img src ={recipe.image} alt = {recipe.name}/>
              <p>
                <em>Category: {recipe.category}</em>
                &nbsp;·&nbsp;
                {/* <cite>By {recipe.user.username}</cite> */}
              </p>
              <p><em>Description</em>: {recipe.description}</p>
              <ReactMarkdown>{recipe.ingredients}</ReactMarkdown>
              <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
            </Box>
          </Recipe>
        ))
      ) : (
        <>
          <h2>No Recipes Found</h2>
          <Button as={Link} to="/new">
            Make a New Recipe
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default RecipeList;
