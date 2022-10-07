import React,{useState} from "react";
import { Box,Button, FormField, Input, Label, Textarea } from "../styles";

function Comment({myComment, user, handleDelete, recipe, setComments, comments}) {
    const[showEdit, setShowEdit] = useState(false)
    const [rating, setRating] = useState(myComment.rating)
    const [description, setDescription] = useState(myComment.description)

    // useEffect(() => {
    //   fetch(`http://localhost:9292/users/${myReview.user_id}`)
    //   .then(resp => resp.json())
    //   .then(data => setUser(data))
    //   },[])
    
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

      fetch(`/comments`)
      .then(resp => resp.json())
      .then(data => setComments(data))
      
     setShowEdit(!showEdit)

    }
    //deleting comment
    function handleClick(){
        fetch(`/comments/${myComment.id}`, { method: "DELETE", })
        .then((r) => {
          if (r.ok) {
            setComments([comments.filter((c) => c.id !== myComment.id)])          
        } else {
            r.json().then((err) => alert(err.error));
          }})
            }
  
     
    
    return (
        <div>
          <Label>Rating:</Label> 
          <h4>{myComment.rating} / 5</h4>
          <Label>Comment: </Label>
          <p>{myComment.description}</p>
          <i>Created by: {user.username} </i>

          <Button id = "button" onClick = {handleClick}>Delete Comment</Button> 
          <Button id = "button" onClick = {handleEdit}>Edit Comment</Button> 
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