import React from 'react';

const VideoPlayer = ({ video, handleWatchLaterButtonClick }) =>
  !video ? (
    <div className="video-player">Please wait...</div>
  ) : (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
        <div>{video.snippet.publishedAt}</div>
        <div><button onClick={() => handleWatchLaterButtonClick(video)}>Watch Later</button></div>
      </div>
    </div>
  );

export default VideoPlayer;
/*
const VideoPlayer = (props) => {
  return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src= {`https://www.youtube.com/embed/${props.video.id.videoId}`} 
        allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
  )
};

export default VideoPlayer;
*/