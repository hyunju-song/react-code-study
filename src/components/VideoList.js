import React from 'react';
import VideoListEntry from './VideoListEntry';

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
// import { fakeData } from './__test__/fakeData';
// console.log(fakeData)

const VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  // const videoList = videos.map((video) => (
  //     <VideoListEntry 
  //     click = {click}
  //     video = {video}
  //     key = {video.id.videoId} />
  // ));
  // return 
  <div className="video-list media">
    {videos.map(video => (
      <VideoListEntry 
        video = {video}
        key = {video.etag} 
        handleVideoListEntryTitleClick = {handleVideoListEntryTitleClick}
      />
    ))}
  </div>
);

export default VideoList;
