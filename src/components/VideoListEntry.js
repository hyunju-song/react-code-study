import React from 'react';

const VideoListEntry = ({video, handleVideoListEntryTitleClick}) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img 
        className="media-object" 
        src={video.snippet.thumbnails.default.url} 
        alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" 
      onClick={() => handleVideoListEntryTitleClick(video)}>
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail">
        {video.statistics.viewCount}
      </div>
    </div>
  </div>
)

export default VideoListEntry;
