import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header.js';
import Main from '../src/components/Main.js';
import Aside from '../src/components/Aside.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Aside />
      </div>
    );
  }
}

export default App;
