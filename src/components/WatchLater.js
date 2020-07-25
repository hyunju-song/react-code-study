import React from 'react';
import WatchLaterEntry from './WatchLaterEntry;

const WatchLater = ({ videos, handleVideoListEntryTitleClick,watchLaterDelete }) => (
  <div className="watch-later-list">
    {videos.map(video => (
      <WatchLasterEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        watchLaterDelete={watchLaterDelete}
      />
    ))}
  </div>
);

export default WatchLater;