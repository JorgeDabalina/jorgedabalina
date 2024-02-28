import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/index.css';
import { hydrate, render } from "react-dom";


import Main from './Main';
// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<Main />, rootElement);
} else {
  render(<Main />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
