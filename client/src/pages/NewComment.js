import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label } from "../styles";

function NewComment({ user, recipe, setComments, comments}) {
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
console.log({recipe})
console.log({user})
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    let newComm = {rating,
      description,
      "recipe_id": recipe.id,
      "user_id": user.id   }
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComm),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        setComments([...comments, newComm])
        history.push("/");
        
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Comment</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="rating">Rating</Label>
            <Input
              type="integer"
              id="name"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
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
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Comment"}
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

export default NewComment;