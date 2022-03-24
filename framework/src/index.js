import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Component1 from './component/Component1';
import Component2 from './component/Component2';
import Component3 from './component/Component3';
import Component4 from './component/Component4';

ReactDOM.render(
  <React.StrictMode>
    <Component1/>
    <Component2/>
    <Component3/>
    <Component4/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
