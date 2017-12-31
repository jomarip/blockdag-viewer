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

    Daglib.addBlock(dag, {
      links: [0, 1],
    });

    Daglib.addBlock(dag, {
      links: [0, 1],
    });

    Daglib.addBlock(dag, {
      links: [0, 1, 2],
    });

    Daglib.addBlock(dag, {
      links: [0, 1, 2],
    });

    Daglib.addBlock(dag, {
      links: [1, 2],
    });

    Daglib.addBlock(dag, {
      links: [1,2,3,4],
    });

    Daglib.addBlock(dag, {
      links: [4,5,6],
    });
    Daglib.addBlock(dag, {
      links: [4,5,6],
    });

    Daglib.addBlock(dag, {
      links: [4,5,6,8],
    });
    Daglib.addBlock(dag, {
      links: [4,5,6,8],
    });

    Daglib.addBlock(dag, {
      links: [6,8, 10],
    });

    Daglib.addBlock(dag, {
      links: [6,8, 10, 11],
    });

    Daglib.addBlock(dag, {
      links: [6,8, 10, 12],
    });

    Daglib.addBlock(dag, {
      links: [6,13, 14],
    });

    Daglib.addBlock(dag, {
      links: [15],
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        </div>
        <DagDisplay dag={dag}></DagDisplay>
      </div>
    );
  }
}

export default App;
