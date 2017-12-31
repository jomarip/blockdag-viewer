import React, { Component } from 'react';
import './App.css';
import DagDisplay from './DagDisplay';
import Daglib from './Daglib';

class App extends Component {
  constructor(props) {
    super(props);
    this.dag = Daglib.create();
    this.state = {
      generating: false,
      noisy: true,
    };

    this.toggleGenerator = this.toggleGenerator.bind(this);
    this.toggleNoisy = this.toggleNoisy.bind(this);
    this.tickGenerator = this.tickGenerator.bind(this);

    setInterval(() => {this.tickGenerator()}, 100);

  }
  tickGenerator() {
    if (!this.state.generating) {
      return;
    }

    Daglib.demoMine(this.dag);
    Daglib.demoMine(this.dag);

    this.setState({});
  }
  toggleGenerator() {
    this.setState({
      generating: !this.state.generating,
    });
  }
  toggleNoisy() {
    this.setState({
      noisy: !this.state.noisy,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dag viewer (Built purely in vanilla React, CSS, and JS)</h1>
          <p>
            Note: This is just a prototype and starts to lag at about 800 nodes.
            The layout engine runtime is inefficient because it recalculates the whole graph every new block.<br />
            However, it can be optimized to run in almost O(1) for each addition.</p>

          <p>Instructions: Start mining and scroll horizontally</p>

          <button onClick={this.toggleGenerator}>
            {this.state.generating ? 'Pause mining' : 'Start mining'}
          </button>
          <button onClick={this.toggleNoisy}>
            {this.state.noisy ? 'Disable noisy positioning' : 'Enable noisy positioning'}
          </button>
        </header>
        <DagDisplay dag={this.dag} noisy={this.state.noisy}></DagDisplay>
      </div>
    );
  }
}

export default App;
