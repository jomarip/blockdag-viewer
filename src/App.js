import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DagDisplay from './DagDisplay';
import Daglib from './Daglib';

class App extends Component {
  render() {
    let dag = Daglib.create();

    Daglib.addBlock(dag, {
      links: [0],
    });

    // Daglib.addBlock(dag, {
    //   links: [0, 1],
    // });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <DagDisplay dag={dag}></DagDisplay>
        </div>
      </div>
    );
  }
}

export default App;
