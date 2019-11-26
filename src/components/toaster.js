import React, { Component } from 'react';
import HeatLevel from './HeatLevel'
import { Toaster } from './toaster.css';
import Toast from './toast';

class toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      toastLevel: 'unToasted'
    }
  }
  
  handleLeverClick = (e) => {
    console.log('Lever pushed');
    this.setState({
      isOn: !this.state.isOn
    })
  }

  handleHeatClick = (e) => {
    const selectedLevel = e.currentTarget.dataset.toastLevel;
    this.setState({
      toastLevel: selectedLevel
    })
  }

  render() {
    return (
      <Toaster 
        theme={this.props.theme} 
        className="Toaster"
      >
        <div className="toaster-top">
          <span className="toaster-tray">
            <Toast
              theme={this.props.theme}
              toastLevel={this.state.toastLevel}
              isOn={this.state.isOn}
            />
          </span>
        </div>
        <span className="bars">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        <HeatLevel 
          heatClick={this.handleHeatClick} 
          theme={this.props.theme} 
        />
        <span className="lever">
          <button 
            onClick={this.handleLeverClick} className="handle"
          >
          </button>
        </span>
      </Toaster>
    );
  }
}

export default toaster;