import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DagDisplay from './DagDisplay';
import Daglib from './Daglib';

class App extends Component {
  constructor(props) {
    super(props);
    this.dag = Daglib.create();
    this.state = {
      generating: false,
      intervalId: 0,
    };

    this.toggleGenerator = this.toggleGenerator.bind(this);
    this.tickGenerator = this.tickGenerator.bind(this);

    setInterval(() => {this.tickGenerator()}, 100);

  }
  tickGenerator() {
    if (!this.state.generating) {
      return;
    }
    let blocks = this.dag.blocks;

    let numLinks = 0;
    numLinks += Math.round(Math.random()*2);
    numLinks += Math.round(Math.random()*2);

    if (numLinks > blocks.length) {
      numLinks = blocks.length - 1;
    }
    if (numLinks < 1) {
      numLinks = 1;
    }

    let minLink = blocks.length > 15 ? blocks.length - 15 : 0;
    let maxLink = blocks.length - 1;

    let links = [];

    while (links.length < numLinks) {
      let dest = Math.floor(Math.random() * (blocks.length - minLink)) + minLink;
      if (dest < minLink || links.indexOf(dest) > -1) {
        continue;
      }
      links.push(dest);
    }

    Daglib.addBlock(this.dag, {
      links: links,
    });

    this.setState({});
  }
  toggleGenerator() {
    this.setState({
      generating: !this.state.generating,
    });
    this.tickGenerator();
  }
  render() {
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hi! :D </h1>
        </header>
        <div className="App-intro">
        </div>
        <button onClick={this.toggleGenerator}>
          {this.state.generating ? 'Pause mining' : 'Start mining'}
        </button>
        <DagDisplay dag={this.dag}></DagDisplay>
      </div>
    );
  }
}

export default App;
