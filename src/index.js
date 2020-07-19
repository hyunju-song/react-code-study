import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import { YOUTUBE_API_KEY } from '../config/youtube';
//import { searchYouTube } from "./searchYouTube";

//const title = 'hello world';
//console.log(App);
//console.log(YOUTUBE_API_KEY);

ReactDOM.render(
  <App />, 
  document.getElementById("app")
);

  /*
  <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube}/>,
  document.getElementById('app')
);

*/