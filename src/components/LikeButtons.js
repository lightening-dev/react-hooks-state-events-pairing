import react from "react";

function LikeButtons({upVotesNum, downVotesNum, upVotesSetter, downVotesSetter}) {

            function handleUpClick(event) {
                event.preventDefault();
            upVotesSetter(upVotesNum + 1);
            }

            function handleDownClick(event){
                event.preventDefault();
            downVotesSetter(downVotesNum - 1);
            }
          
    return (
        <div>
            <button onClick={handleUpClick}>{upVotesNum} up</button>
            <button onClick={handleDownClick}>{downVotesNum} down</button>

        </div>
    )
}

export default LikeButtons; 