import React, { Component } from 'react';
import './DagDisplay.css';
import DagDisplayBlock from './DagDisplayBlock';
import Daglib from './Daglib';
import Arrow from './Arrow';

const BLOCK_HALF_SIZE = 20; // This constant is used to offset the links to land in the right spots

class DagDisplay extends Component {
  render() {
    let bodyItems = [];
    let dag = this.props.dag;
    let dagLayout = Daglib.layout(dag);

    // NOTE: There is a reason why arrows sit on the same level as blocks. This is so that z-indexes can be
    // properly set.
    for (let id in dag.blocks) {
      let block = dag.blocks[id];
      let layout = dagLayout.blocks[id];

      let arrows = [];

      for (let linkIndex in block.links) {
        let linkLayout = layout.links[linkIndex];

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
        arrows.push(
          <Arrow key={block.id + '.' + block.links[linkIndex]} {...arrowProps} />
        )
      }
      bodyItems.push(<DagDisplayBlock key={id} block={dag.blocks[id]} layout={dagLayout.blocks[id]} />);
      bodyItems.push(<div className="DagDisplay__arrowGroup">{arrows}</div>);

    }

    let bodyStyles = {
      width: dagLayout.sizeX + 'px',
      height: dagLayout.sizeY + 'px',
    };

    return (
      <div className="DagDisplay">
        <div className="DagDisplay__body" style={bodyStyles}>
          {bodyItems}
        </div>
      </div>
    );
  }
}

export default DagDisplay;
