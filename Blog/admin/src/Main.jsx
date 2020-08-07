import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import AdminIndex from './AdminIndex';
import AddArticle from './pages/AddArticle';

export const Main = () => {
  return (
    <Router>
      <Route path="/login" component={Login}></Route>
      <Route path="/amd/" component={AdminIndex}></Route>
      <Route path="/index/" exact component={AddArticle}></Route>
    </Router>
  )
}