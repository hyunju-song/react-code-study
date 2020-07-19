import React from 'react';
//import {searchYouTube} from "../searchYouTube";
//import { YOUTUBE_API_KEY } from "../../config/youtube";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;

/*
class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      input:'',
      count:0
    }
    this.click=this.click.bind(this);
    this.change=this.change.bind(this);
  }

  componentDidMount(){
    setInterval(()=>this.setState({count:0}), 9999
    )
  }
  click(){
    if(this.state.count>5){
      alert('try later')
      return;
    }
    if(this.state.input.length<=3){
      alert('type what you want to search')
      return;
    }
    this.setState({count:this.count+1});
    searchYouTube({query:this.state.input, max:10,
    key:YOUTUBE_API_KEY}, (item) =>{
      this.props.search(item[0],item)
    })
  }
  change(e){
    if(e.target.value.length >=3){
      this.setState({input:e.target.value})
    }
  }
  render(){
    return(
  <div className="search-bar form-inline">
    <input className="form-control" type="text" 
    value={this.state.value}
    onChange={this.change}/>
    <button className="btn hidden-sm-down"
    onClick={this.click}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
    )
  }
}

export default Search;
*/