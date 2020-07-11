import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: fakeData[0],
      data: fakeData,
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;
