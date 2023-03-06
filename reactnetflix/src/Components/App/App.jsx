import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavigationBar from '../NavigationBar/NavigationBar';
import Content from '../Content/Content';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Content />
      </div>
    );
  }
}

export default App;
