import React, { Component } from 'react';
import './Arrow.css';

class Arrow extends Component {
  render() {
    return (
      <div className="Arrow" role="img">
        <div className="Arrow__line">
        </div>
        <div className="Arrow__head">
        </div>
      </div>
    );
  }
}

export default Arrow;
