import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
// import AdminIndex from './AdminIndex';
// import BasicRoute from './router/index';
import * as serviceWorker from './serviceWorker';
import { Main } from './Main';

import './index.css';

ReactDOM.render(
  // <React.StrictMode>
  //   <Router>
  //     <Route path="/" exact component={Login}></Route>
  //   </Router>
  // </React.StrictMode>,
  <Main/>,
  
  // <BasicRoute />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
