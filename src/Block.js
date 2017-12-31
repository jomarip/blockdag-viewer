import React, { Component } from 'react';
import './Block.css';
import Arrow from './Arrow';

class Block extends Component {
  render() {
    let block = this.props.block;
    let links = [];

    for (let i in block.links) {
      links.push(
        <Arrow key={i} fromX={200} fromY={100} toX={50} toY={50} />
      )
    }

    return (
      <div className="Block">
        <div className="Block__body">
          ID: {this.props.block.id}
        </div>
        {links}
      </div>
    );
  }
}

export default Block;
