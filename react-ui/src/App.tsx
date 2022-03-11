import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './css/App.css';
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Order from "./pages/Order"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/order">
        <Order />
      </Route>
      <Route exact path="/menu">
        <Menu />
      </Route>
    </Router>
  );
}

export default App;
