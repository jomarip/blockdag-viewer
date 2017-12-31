import React, { Component } from 'react';
import './Block.css';
import Arrow from './Arrow';

class Block extends Component {
  render() {
    let block = this.props.block;
    let links = [];

    for (let i in block.links) {
      links.push(
        <Arrow key={i} x1={100} y1={100} x2={300} y2={300} />
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
