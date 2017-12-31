import React, { Component } from 'react';
import './Arrow.css';

const ROTATION_OFFSET = Math.PI/2;

class Arrow extends Component {
  render() {
    let xDelta = (this.props.fromX - this.props.toX);
    let yDelta = (this.props.fromY - this.props.toY);
    let length = Math.sqrt(xDelta*xDelta + yDelta*yDelta);
    let lengthMultiplier = Math.round(length)/100; // Rounded to nearest whole pixel. For more precision, do Math.round(length*10)/10000

    let rotation = -Math.atan2(xDelta, yDelta) + ROTATION_OFFSET;

    let arrowStyle = {
      transform: 'translate(' + this.props.toX + 'px, ' + this.props.toY + 'px) rotate(' + rotation + 'rad)',
    };
    let lineStyle = {
      transform: 'scale(' + lengthMultiplier + ', 1)',
    };
    return (
      <div className="Arrow" role="img" style={arrowStyle}>
        <div className="Arrow__line" style={lineStyle}>
        </div>
        <div className="Arrow__head">
        </div>
      </div>
    );
  }
}

export default Arrow;
