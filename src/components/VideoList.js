import React from 'react';
import VideoListEntry from './VideoListEntry';

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
//import { fakeData } from './__test__/fakeData';
//console.log(fakeData)

const VideoList = ({ videos, handleVideoListEntryTitleClick, handleWatchLaterButtonClick }) => (
  <div className="video-list media">
    {videos.map(video => (
      <VideoListEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        handleWatchLaterButtonClick={handleWatchLaterButtonClick}
      />
    ))}
  </div>
);

export default VideoList;
/*
const VideoList = (props) => {
  const videos = props.videos;
  const videoList = videos.map((video) => (
      <VideoListEntry 
      video = {video}
      key = {video.etag} 
      click = {props.click}
      />
  ));
  return <div className="video-list media">
    {videoList}
  </div>
);

export default VideoList;
*/
