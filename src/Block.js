import React, { Component } from 'react';
import './Block.css';
import Arrow from './Arrow';

const BLOCK_HALF_SIZE = 25; // This constant is used to offset the links to land in the right spots

class Block extends Component {
  render() {
    let block = this.props.block;
    let layout = this.props.layout;
    let links = [];

    for (let linkIndex in block.links) {
      let linkLayout = layout.links[linkIndex];

      console.log(linkLayout)
      console.log('Link ' + block.id + '->' + linkIndex + `: (${layout.x},${layout.y})->(${linkLayout.toX},${linkLayout.toY})`)

      // It's possible to spread the fromY a bit, but sometimes, lines cross. In order to do it properly,
      // you would have to sort the toY values so that you can properly spread the fromY.
      // TODO: Takes maybe 10-20 minutes to implement.
      // let yOffset = 0;
      // if (block.links.length > 1) {
      //   yOffset = Math.round(linkIndex/(block.links.length-1)*10) - 5;
      // }

      let arrowProps = {
        fromX: layout.x - BLOCK_HALF_SIZE + 1, // Arrow should end at the destination block. 1px inside the block to hide rough edges
        fromY: layout.y,
        toX: linkLayout.toX + BLOCK_HALF_SIZE, // Starts at the destination block.
        toY: linkLayout.toY,
      }
      links.push(
        <Arrow key={linkIndex} {...arrowProps} />
      )
    }

    let bodyStyle = {
      top: layout.y,
      left: layout.x,
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
