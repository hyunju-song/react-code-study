import React from 'react';
import WatchLasterEntry from './WatchLaterEntry';

const WatchLater = ({ videos, handleVideoListEntryTitleClick }) => (
  <div className="watch-later-list">
    {videos.map(video => (
      <WatchLasterEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
      />
    ))}
  </div>
);

export default WatchLater;