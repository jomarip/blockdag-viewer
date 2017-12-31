import React, { Component } from 'react';
import './DagDisplayBlock.css';
import Arrow from './Arrow';

class DagDisplay__Block extends Component {
  render() {
    let block = this.props.block;
    let layout = this.props.layout;

    let bodyStyle = {
      top: layout.y,
      left: layout.x,
    };

    return (
      <div className="DagDisplay__Block">
        <div className="Block__body" style={bodyStyle}>
          <span>{this.props.block.id}</span>
        </div>
      </div>
    );
  }
}

export default DagDisplay__Block;
