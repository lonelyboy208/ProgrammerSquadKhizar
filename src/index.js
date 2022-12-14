import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Page from './Toggles';
// import Blog from './KeyListing';
import Calculator from './StateUplifting';


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Props for Keylisting: Posts
  const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
  ];

  root.render(

  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
