import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {createStore} from 'redux';
// import { Provider } from 'react-redux';

// function counterReducer(state=0, action){
//   console.log(("action", action));
//   if(action.type==='increment'){
//     return state+1;
//   }else if(action.type==='decrement'){
//     return state-1;
//   }else if(action.type==='reset'){
//     return 0;
//   }
//   else
//     return state;


// }

// const store= createStore(counterReducer);


ReactDOM.render(
  // <Provider >
    <App />,
  // </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
