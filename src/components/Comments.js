import react, { useState } from "react";
import video from "../data/video";

function CommentsButton({}) {
  
   const [clickState, setClickState] = useState(false);
    
   const comments = video.comments.map((eachComment) => eachComment.comment)

   const numOfComments = video.comments.length;

    function handleClick() {
       setClickState(!clickState)
    }

    function showComments() {
            return (
                <div>{comments}</div>
            )
    }

    
    
    return (
        <div>
                <button onClick={handleClick}>{clickState? "Hide Comments" : "Show Comments"} </button>
                <p>{clickState? (comments + (numOfComments + " Comments")) : null}</p>
        </div>
    )
}

export default CommentsButton;