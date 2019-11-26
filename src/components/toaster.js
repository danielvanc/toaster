import React, { Component } from 'react';
import { Toaster } from './toaster.css'
import Toast from './toast'

class toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      toastLevel: 'unToasted'
    }
  }
  
  handleLeverClick = () => {
    console.log('Lever pushed');
  }

  render() {
    return (
      <Toaster 
        theme={this.props.theme} 
        className="Toaster"
      >
        <div className="toaster-top">
          <span className="toaster-tray">
            <Toast theme={this.props.theme} toastLevel={this.state.toastLevel} />
          </span>
        </div>
        <span className="bars">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
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