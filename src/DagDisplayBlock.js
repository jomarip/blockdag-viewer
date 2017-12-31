import React, { Component } from 'react';
import './DagDisplayBlock.css';
import Arrow from './Arrow';

class DagDisplayBlock extends Component {
  render() {
    let block = this.props.block;
    let layout = this.props.layout;

    let bodyStyle = {
      top: layout.y,
      left: layout.x,
    };

    return (
      <div className="DagDisplay__Block">
        <div className="DagDisplay__Block__body" style={bodyStyle}>
          <span>{this.props.block.id}</span>
        </div>
      </div>
    );
  }
}

export default DagDisplayBlock;
