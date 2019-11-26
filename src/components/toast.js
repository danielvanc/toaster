import React, { Component } from 'react';
import { Toast } from './toast.css'

class toast extends Component {

  handleToastStatus = (status) => {
    if (status === false) return 'up';

    if (this.props.toasted) {
      return 'down toasted'
    } else {
      return 'down'
    }
  }

  render() {
    return (
      <Toast 
        theme={this.props.theme} 
        toastLevel={this.props.toastLevel}
        className={this.handleToastStatus(this.props.isOn)}
      />
    );
  }
}

export default toast;