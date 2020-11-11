import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Chapter06 from './Chapter06';
import Greeting from './Chapter07/Greeting';
import LoginControl from './Chapter07/LoginControl';
import AttendanceBook from './Chapter08/AttendanceBook';
import SignUp from './Chapter09/SignUp';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//     ReactDOM.render(
//       element,
//       document.getElementById('root'));
// }
// setInterval(tick, 1000);

ReactDOM.render(<SignUp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
