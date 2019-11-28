import React from 'react';
import { HeatLevelBar } from './HeatLevel.css'

const HeatLevel = (props) => {
  return (
    <HeatLevelBar 
      theme={props.theme}
      data-testid="heatlevels"
    >
      <li>
        <button 
          className={`${props.toastLevel === "lightlyDone" && "active"}`}
          onClick={props.heatClick}
          data-toast-level="lightlyDone"
          data-toast-level-time="4"
          disabled={props.isOn || props.toasting}
        >
          <span>Light</span>
        </button>
      </li>
      <li>
        <button
          className={`${props.toastLevel === "mediumDone" && "active"}`}
          onClick={props.heatClick}
          data-toast-level="mediumDone"
          data-toast-level-time="7"
          disabled={props.isOn || props.toasting}
        >
          <span>Medium</span>
        </button>
      </li>
      <li>
        <button
          className={`${props.toastLevel === "overDone" && "active"}`}
          onClick={props.heatClick}
          data-toast-level="overDone"
          data-toast-level-time="10"
          disabled={props.isOn || props.toasting}
        >
          <span>Well done</span>
        </button>
      </li>
    </HeatLevelBar>
  )
}

export default HeatLevel;