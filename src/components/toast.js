import React, { Component } from 'react';
import { Toast } from './toast.css'

class toast extends Component {
  render() {
    return (
      <Toast 
        theme={this.props.theme} 
        toastLevel={this.props.toastLevel} className="up" 
      />
    );
  }
}

export default toast;