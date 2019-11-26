import React, { Component } from 'react';
import { Toast } from './toast.css'

class toast extends Component {

  handleToastStatus = (status) => {
    if (status && this.props.toasting) return 'down toasting';
    if (status && !this.props.toasting) return 'down';
    if (status === false && this.props.toasting) return 'up toasting';
    if (!status && !this.props.toasting) return 'up'
  }

  render() {
    return (
      <Toast 
        theme={this.props.theme} 
        toasting={this.props.toasting}
        toastLevel={this.props.toastLevel}
        className={this.handleToastStatus(this.props.isOn)}
        toastLevelTime={this.props.toastLevelTime}
      />
    );
  }
}

export default toast;