import React from "react";
import video from "../data/video.js";

function VideoContainer() { 

  const videoInfo = ([video.title, video.views, video.createdAt]);

    return (
        <div className="App">
        <iframe
          width="919"
          height="525"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
        <div>{videoInfo}</div>
      </div>

    )
}

export default VideoContainer;