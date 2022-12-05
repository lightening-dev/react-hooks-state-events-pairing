import react, {useState} from "react";
import video from "../data/video";
import VideoContainer from "../components/VideoContainer"
import LikeButtons from "../components/LikeButtons"
import CommentsButton from "./Comments";

function App( ) {
  console.log("Here's your data:", video);

    const [upVotesNum, upVotesNumSetter] = useState(video.upvotes);
    const [downVotesNum, downVotesNumSetter] = useState(video.downvotes)

    const [comments, commentSetter] = useState(video.comments)

    


    

  return (
   <div className={"App"}>
     <VideoContainer/>
     <LikeButtons upVotesNum={upVotesNum} 
                  downVotesNum={downVotesNum}
                  upVotesSetter={upVotesNumSetter}
                  downVotesSetter={downVotesNumSetter}/>
     <CommentsButton comments={comments} commentSetter={commentSetter}/>
        
   </div>
  );
}

export default App;
