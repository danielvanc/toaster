import React, { Component } from 'react';
import HeatLevel from './HeatLevel'
import { Toaster } from './toaster.css';
import Toast from './toast';

class toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      toastLevel: 'lightlyDone',
      toasting: false,
      toastLevelTimer: 4
    }
  }
 
  componentDidUpdate() {
    if (this.state.isOn) {
      this.timerID = setTimeout(() => {
        console.log('Start toasting...');
        this.setState({
          toasting: true
        })
        this.interID = setInterval(() => {
          this.setState({
            isOn: false,
          })
          console.log('Finished toasting!');
          clearInterval(this.interID)
        }, Number(this.state.toastLevelTimer + '000'));
        clearTimeout(this.timerID);
      }, 1000);
    }
  }
  
  handleLeverClick = (e) => {
    this.setState({
      isOn: !this.state.isOn,
    })
  }

  handleLoadToast = () => {
    this.setState({
      isOn: false,
      toasting: false
    })
  }

  handleHeatClick = (e) => {
    if (this.state.isOn) return;
    const selectedLevel = e.currentTarget.dataset.toastLevel;
    const selectedLevelTime = e.currentTarget.dataset.toastLevelTime;
    this.setState({
      toastLevel: selectedLevel,
      toastLevelTimer: selectedLevelTime
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
              toastLevelTime={this.state.toastLevelTimer}
              isOn={this.state.isOn}
              toasting={this.state.toasting}
            />
          </span>
          <button 
            onClick={this.handleLoadToast} className="loadToast"
            disabled={this.state.isOn}
          >
            Load
          </button>
        </div>
        <span className="bars">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        <HeatLevel 
          heatClick={this.handleHeatClick} 
          toastLevel={this.state.toastLevel}
          theme={this.props.theme} 
          isOn={this.state.isOn}
          toasting={this.state.toasting}
        />
        <span className={`lever ${this.state.isOn ? 'down' : ''}`}>
          <button 
            onClick={this.handleLeverClick}
            className="handle"
            disabled={this.state.isOn || this.state.toasting}
          >
          </button>
        </span>
      </Toaster>
    );
  }
}

export default toaster;