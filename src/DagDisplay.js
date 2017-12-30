import React, { Component } from 'react';
import './DagDisplay.css';
import Block from './Block';


class DagDisplay extends Component {
  render() {
    let blocks = [];
    let dag = this.props.dag;
    for (let id in dag.blocks) {
      blocks.push(<Block key={id} block={dag.blocks[id]} />);
    }

    return (
      <div className="DagDisplay">
        {blocks}
      </div>
    );
  }
}

export default DagDisplay;
