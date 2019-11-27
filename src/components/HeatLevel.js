import React, { Component } from 'react';
import { HeatLevelBar } from './HeatLevel.css'

class HeatLevel extends Component {
  render() {
    return (
      <HeatLevelBar theme={this.props.theme}>
        <li>
          <button 
            className={this.props.toastLevel === "lightlyDone" && "active"}
            onClick={this.props.heatClick}
            data-toast-level="lightlyDone"
            data-toast-level-time="4"
          >
            <span>Light</span>
          </button>
        </li>
        <li>
          <button
            className={this.props.toastLevel === "mediumDone" && "active"}
            onClick={this.props.heatClick}
            data-toast-level="mediumDone"
            data-toast-level-time="7"
          >
            <span>Medium</span>
          </button>
        </li>
        <li>
          <button
            className={this.props.toastLevel === "overDone" && "active"}
            onClick={this.props.heatClick}
            data-toast-level="overDone"
            data-toast-level-time="10"
          >
            <span>Well done</span>
          </button>
        </li>
      </HeatLevelBar>
    );
  }
}

export default HeatLevel;