import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const formatName = function(name){
  return name.firstName+ " " + name.lastName;
}
const name = {
  firstName: "Jinwoo",
  lastName: "Lee",
};
const element = <h1>Hello, {formatName(name)}</h1>
// element는 주로 화면에 보이는 것들을 기술함
// element 기술 후에는 children 혹은 attribute를 바꿀 수 없음
ReactDOM.render(
  element,
  document.getElementById('root'));

const element1 = <h1>Hello, world!</h1>
ReactDOM.render(element1,
  document.getElementById('root'));

function tick(){
  const element2 = (
    <div>
      <h1>Hello, world!</h1>
  <h2>It is {new Date().toLocaleString()}</h2>
    </div>
  );
  ReactDOM.render(element2,
    document.getElementById('root'));
}
setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
