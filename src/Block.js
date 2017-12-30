import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
  render() {
    let block = this.props.block;
    let links = [];

    for (let i in block.links) {
      console.log(block.links)
      links.push(
        <div key={i} className="Block__link">
          {block.id} -> {block.links[i]}
        </div>
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
