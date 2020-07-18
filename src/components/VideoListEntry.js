import React from 'react';

const VideoListEntry = ({ video, handleVideoListEntryTitleClick, handleWatchLaterButtonClick }) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img
        className="media-object"
        src={video.snippet.thumbnails.default.url}
        alt=""
      />
    </div>
    <div className="media-body">
      <div
        className="video-list-entry-title"
        onClick={() => handleVideoListEntryTitleClick(video)}
      >
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
      <div className="video-published">{video.snippet.publishedAt}</div>
      <div><button onClick={() => handleWatchLaterButtonClick(video)}>Watch Later</button></div>
    </div>
  </div>
);

export default VideoListEntry;
/*
const VideoListEntry = (props) => {
  return(
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img 
        className="media-object" 
        src={video.snippet.thumbnails.default.url} 
        alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" 
      onClick={()=>props.click(props.video)}>
        {props.video.snippet.title}</div>
      <div className="video-list-entry-detail">
        {video.statistics.viewCount}
      </div>
    </div>
  </div>
)

export default VideoListEntry;
*/