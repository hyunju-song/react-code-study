import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import WatchLater from './WatchLater';
//import { fakeData } from "./__test__/fakeData";
import { searchYouTube } from '../searchYouTube';
import { YOUTUBE_API_KEY } from '../../config/youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: [],
      watchLater: [],
    };
  }

  componentDidMount() {
    this.getYouTubeVideos("cats");
    if (JSON.parse(localStorage.getItem("watchLater") !== null)) {
      this.setState({
        watchLater: JSON.parse(localStorage.getItem("watchLater"))
      })
    }
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
      currentVideo: video
    });
  }

  handleWatchLaterButtonClick(video) {
    if(this.state.watchLater.includes(video)){
      return;
    } else{
      localStorage.setItem('watchLater', JSON.stringify(this.state.watchLater));
      this.setState({
        watchLater: this.state.watchLater.concat(video)
      });
    }
  }

  watchLaterDelete(video){
    let removeIndex = this.state.watchLater.indexOf(video)
    this.state.watchLater.splice(removeIndex,1)
    this.setState({
      watchLater: this.state.watchLater
    })
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer 
            video={this.state.currentVideo}
            handleWatchLaterButtonClick={this.handleWatchLaterButtonClick.bind(this)} />
        </div>
        <div className="col-md-7">
          <VideoList
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
            handleWatchLaterButtonClick={this.handleWatchLaterButtonClick.bind(this)}
            videos={this.state.videos}
          />
        </div>
        <div className="watch-later">
        <div className="watch-later-title">Watch Later List</div>
          <WatchLater
            //함수이름={this.함수이름.bind(this)  
            videos={this.state.watchLater}
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
            watchLaterDelete ={this.watchLaterDelete.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;

//   /*
//   search(video, videos) {
//     this.setState({
//       currentVideo: video,
//       data: videos,
//     });
//   }

//   remove(target){
//     this.setState({watchlater: this.state.watchlater.filter(item => item!==target)}, function(){this.save()})
//   }

//   componentDidMount() {
//     // 아래는 참고용 코드이며
//     // searchYouTube 내용을 추가해서 검색 결과를 넣어야 합니다.
//     searchYouTube({query: 'swstudy', max: 5, 
//     key: YOUTUBE_API_KEY},datas =>{
//     this.setState({
//       data: datas,
//       currentVideo: data[0] 
//     })
//     })
//   }

//   handleClick(video) {
//     this.setState({
//       // 대체 할 내용을 쏼라쏼라
//       // {기존의값 : 변경 될 값}
//       currentVideo: video
//     })
//     //console.log(video)
//   }

//   searchSomething(inputValue){
//     searchYouTube({ query: inputValue, max: 5, 
//       key: YOUTUBE_API_KEY}, datas => {
//       this.setState({
//         data: datas,
//         currentVideo: datas[0]
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Nav />
//         <div className="col-md-7">
//           <VideoPlayer video={this.state.currentVideo || fakeData[0]}/>
//         </div>
//         <div className="col-md-5">
//           <VideoList videos={this.state.data} 
//           click={this.handleClick}/>
//         </div>
//       </div>
//     )
//   }
// }
// */
