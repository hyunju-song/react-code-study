import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
//import { fakeData } from "./__test__/fakeData";
import { searchYouTube } from '../searchYouTube';
import { YOUTUBE_API_KEY } from '../../config/youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: [],
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos("cats");
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

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          {/*
           * It's very important to bind the context of this callback.
           * Also acceptable is to pass a anonymous functoin expression with a fat
           * arrow that inherits the surrounding lexical `this` context:
           *
           *   handleVideoListEntryTitleClick={(video) => this.onVideoListEntryClick(video)}
           * //클릭한 전체를 넘어가게 하는 것
           *                                  - or -
           *   handleVideoListEntryTitleClick={(currentVideo) => this.setState({currentVideo})}
           *  // 현재 비디오를 인식해서 데이터로 넘어가게
           */}
          <VideoList
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(
              this
            )}
            videos={this.state.videos}
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
