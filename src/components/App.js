import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentVideo: fakeData[0],
      data: fakeData,
    };
  }

  handleClick(video) {
    this.setState({
      // 대체 할 내용을 쏼라쏼라
      // {기존의값 : 변경 될 값}
      currentVideo: video
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.data} click={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default App;
