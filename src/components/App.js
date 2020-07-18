import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { searchYouTube } from "../searchYouTube";
import { YOUTUBE_API_KEY } from "../../config/youtube";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      currentVideo: null,
      // data: fakeData,
      videos: []
    };
  }

  componentDidMount() {
    this.getYouTubeVideos("react tutorials");
  }

  getYouTubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };

    searchYouTube(options, videos =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      // 대체 할 내용을 쏼라쏼라
      // {기존의값 : 변경 될 값}
      currentVideo: video
    })
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          {}
          <VideoList videos={this.state.videos}
          handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;
