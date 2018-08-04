import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feelings />
      </div>
    );
  }
}

export default App;
