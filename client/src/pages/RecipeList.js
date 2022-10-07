import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import Recipe from "./Recipe.js"

function RecipeList({user}) {
  const [recipes, setRecipes] = useState([]);


function onRemoveRecipe(recipe) {
    setRecipes(recipes.filter((s) => s.id !== recipe.id))
  }

function onUpdateRecipe(){
  fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }
//get recipes
  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);


  return (
    <Wrapper>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
         <Recipe user={user} recipe ={recipe} onRemoveRecipe = {onRemoveRecipe} onUpdateRecipe = {onUpdateRecipe}/>
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
  )
      }
const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;


      
export default RecipeList;
