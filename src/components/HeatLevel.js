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
            data-toast-level-time="4000"
          >
            <span>Light</span>
          </button>
        </li>
        <li>
          <button
            onClick={this.props.heatClick}
            data-toast-level="mediumDone"
            data-toast-level-time="7000"
          >
            <span>Medium</span>
          </button>
        </li>
        <li>
          <button
            onClick={this.props.heatClick}
            data-toast-level="overDone"
            data-toast-level-time="10000"
          >
            <span>Well done</span>
          </button>
        </li>
      </HeatLevelBar>
    );
  }
}

export default HeatLevel;