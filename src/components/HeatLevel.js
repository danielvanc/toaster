import React, { Component } from 'react';
import { HeatLevelBar } from './HeatLevel.css'

class HeatLevel extends Component {
  render() {
    return (
      <HeatLevelBar theme={this.props.theme}>
        <li><button className="active"><span>Light</span></button></li>
        <li><button><span>Medium</span></button></li>
        <li><button><span>Well done</span></button></li>
      </HeatLevelBar>
    );
  }
}

export default HeatLevel;