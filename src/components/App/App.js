import React, { Component } from 'react';
// import axios from 'axios';
import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feelings />
        <Understanding />
        <Support />
        <Comment />
        <ThankYou />
      </div>
    );
  }
}

export default App;
