import React, { Component } from 'react';
import './Block.css';
import Arrow from './Arrow';

class Block extends Component {
  render() {
    let block = this.props.block;
    let layout = this.props.layout;
    let links = [];

    for (let linkIndex in block.links) {
      let linkLayout = layout.links[linkIndex];

      console.log(linkLayout)
      console.log('Link ' + block.id + '->' + linkIndex + `: (${layout.x},${layout.y})->(${linkLayout.toX},${linkLayout.toY})`)

      links.push(
        <Arrow key={linkIndex} fromX={layout.x-25} fromY={layout.y} toX={linkLayout.toX + 25} toY={linkLayout.toY} />
      )
    }

    let bodyStyle = {
      transform: 'translate(' + layout.x + 'px, ' + layout.y + 'px)',
    };
    console.log(bodyStyle)

    return (
      <div className="Block">
        <div className="Block__body" style={bodyStyle}>
          <span>{this.props.block.id}</span>
        </div>
        <div className="Block__arrows">
          {links}
        </div>
      </div>
    );
  }
}

export default Block;
