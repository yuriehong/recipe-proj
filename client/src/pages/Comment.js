import React,{useState} from "react";
import { Button, Label } from "../styles";

function Comment({myComment, user, recipe, setComments}) {
    const[showEdit, setShowEdit] = useState(false)
    const [rating, setRating] = useState(myComment.rating)
    const [description, setDescription] = useState(myComment.description)

      //handling edit comment form submission
    function handleEdit(e){
      e.preventDefault()
      //updating comment
      fetch(`/comments/${myComment.id}`, {
        method : "PATCH",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(
          {rating,
        description,
        "user_id": user.id,
        "recipe_id": recipe.id
    }
        )
      })
      .then(res => res.json())
      .then(data => data)
      setShowEdit(!showEdit)
      // //resets comments
      fetch(`/recipes/${recipe.id}`)
    .then(resp => resp.json())
    .then(data => setComments(data.comments))

      
     

    }
    //deleting comment
    function handleClick(){
        fetch(`/comments/${myComment.id}`, { method: "DELETE", })
        .then((r) => {
          if (r.ok) {
            fetch(`/recipes/${recipe.id}`)
    .then(resp => resp.json())
    .then(data => setComments(data.comments))
          
        } else {
            r.json().then((err) => alert(err.error));
          }})


            }

    function onEditClick(){
      setShowEdit(!showEdit)
    }
  
     
    
    return (
        <div>
          <h4>Rating: {myComment.rating} / 5</h4>
          <Label>Comment: </Label>
          <p>{myComment.description}</p>
          <i>Created by: {user.username} </i>

          <Button id = "button" onClick = {handleClick}>Delete Comment</Button> 
          <Button id = "button" onClick = {onEditClick}>Edit Comment</Button> 
          {showEdit ? 
          <div className="form">
        <form onSubmit={handleEdit}>
          <h3>Edit Comment</h3>
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="text"
            name="name"
            placeholder="Recipe Rating"
            id="description"
          />
                 
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
            name="name"
            placeholder="Comment"
            className="input-text"
          />
          <br />
          
          <input
            type="submit"
            name="submit"
            value="Submit edit"
            className="submit"
          />
        </form>
        </div> : <p></p>}


          </div> 
      );
}

export default Comment