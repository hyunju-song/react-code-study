import React from 'react';

const VideoPlayer = (props) => (
  // console.log("props"+ ":" +props)
  // console.log("props.video"+ ":" +props.video)
  // console.log("props.video.id.videoId"+ ":" +props.video.id.videoId)
  // console.log(`https://www.youtube.com/embed/`+props.video.id.videoId)
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src= {"https://www.youtube.com/embed/"+props.video.id.videoId} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>
  </div>
);

export default VideoPlayer;
