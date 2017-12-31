import React, { Component } from 'react';
import './DagDisplay.css';
import Block from './Block';
import Daglib from './Daglib';


class DagDisplay extends Component {
  render() {
    let blocks = [];
    let dag = this.props.dag;
    let layout = Daglib.layout(dag);

    for (let id in dag.blocks) {
      blocks.push(<Block key={id} block={dag.blocks[id]} layout={layout.blocks[id]} />);
    }

    return (
      <div className="DagDisplay">
        {blocks}
      </div>
    );
  }
}

export default DagDisplay;
