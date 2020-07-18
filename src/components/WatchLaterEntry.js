import React from 'react';

const WatchLasterEntry = ({ video, handleVideoListEntryTitleClick }) => (
  <div className="watch-later-entry">
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
    </div>
  </div>
);

export default WatchLasterEntry;