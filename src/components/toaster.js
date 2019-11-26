import React, { Component } from 'react';
import HeatLevel from './HeatLevel'
import { Toaster } from './toaster.css';
import Toast from './toast';

class toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      toastLevel: 'unToasted',
      toastComplete: false
    }
  }
 
  componentDidUpdate() {
    
    if (this.state.isOn) {
  
      this.timerID = setTimeout(() => {
        console.log('Start toasting...');
        this.interID = setInterval(() => {
          this.setState({
            isOn: false,
            toastComplete: true
          })
          console.log('Finished toasting...');
          clearInterval(this.interID)
        }, 2000);
        clearTimeout(this.timerID);
      }, 1000);
      console.log('Got here...');
      
    }
  }
  
  handleLeverClick = (e) => {
    if (this.state.toastComplete) {
      this.setState({
        toastComplete: false
      })
    }
    this.setState({
      isOn: !this.state.isOn
    })
  }

  handleHeatClick = (e) => {
    if (this.state.isOn) return;
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
              complete={this.state.toastComplete}
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
        <span className={`lever ${this.state.isOn ? 'down' : ''}`}>
          <button 
            onClick={this.handleLeverClick}
            className="handle"
          >
          </button>
        </span>
      </Toaster>
    );
  }
}

export default toaster;