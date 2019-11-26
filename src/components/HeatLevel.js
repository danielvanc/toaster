import React, { Component } from 'react';
import { HeatLevelBar } from './HeatLevel.css'

class HeatLevel extends Component {
  render() {
    return (
      <HeatLevelBar theme={this.props.theme}>
        <li>
          <button 
            className="active"
            onClick={this.props.heatClick}
            data-toast-level="lightlyDone"
          >
            <span>Light</span>
          </button>
        </li>
        <li>
          <button
            onClick={this.props.heatClick}
            data-toast-level="mediumDone"
          >
            <span>Medium</span>
          </button>
        </li>
        <li>
          <button
            onClick={this.props.heatClick}
            data-toast-level="overDone"
          >
            <span>Well done</span>
          </button>
        </li>
      </HeatLevelBar>
    );
  }
}

export default HeatLevel;