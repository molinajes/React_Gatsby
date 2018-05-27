import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';

// Component
import MenuTop from './components/MenuTop'
import MenuLeft from './components/MenuLeft'
import HomePage from './pages/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <MenuTop />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={HomePage} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
