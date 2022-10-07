import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import Recipe from "./Recipe.js"

function RecipeList({user}) {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("All")

//removes recipe for the frontend
function onRemoveRecipe(recipe) {
    setRecipes(recipes.filter((s) => s.id !== recipe.id))
  }

//refreshes the recipes
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

  //filter by category type
  let recipesToDisplay = recipes.filter(item => {
    if (category === "All") {
      return true
    }
    else {
      return (item.category === category)
    }
  });

  return (
    <Wrapper>
      <select id="selectform" value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="All">Filter By Category</option>
            <option value="Cookies">Cookies</option>
            <option value="Bars">Bars</option>
            <option value="Cakes">Cakes</option>
            <option value="Breads">Breads</option>
            <option value="Other">Other</option>
          </select>
      {recipes.length > 0 ? (
        recipesToDisplay.map((recipe) => (
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
