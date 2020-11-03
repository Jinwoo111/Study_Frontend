import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const commentsFromServer = [
  {name: 'Jinwoo Lee', content: 'My comment!'},
  {name: 'Jiwon Jung', content: 'Everybody Listen!'},
];
var timer;

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      comments:[],
    };
  }

  compenentDidMount(){
    let comments = this.state.comments;
    timer = setInterval(() => {
      if(comments.length < commentsFromServer.length){
        let index = comments.length;
        comments.push(commentsFromServer[index]);
      } else if(timer){
        clearInterval(timer);
      }
    }, 1000);
  }
  render(){
    const {comments} = this.state;
    return (
    <div className="App" style={{padding: 16, backgroundColor: '#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {comments.map((comment, index)=> {
          return(
            <Comment 
              name={comment.name}
              content={comment.content}/>
          )
        })}
      </div>
    </div>
  );
  }
}
// comment name, comment is props.
export default App;
