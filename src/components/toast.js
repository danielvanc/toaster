import React from 'react';
import { Toast } from './toast.css'

const toast = props => {
  const handleToastStatus = status => {
    if (status && props.toasting) return 'down toasting';
    if (status && !props.toasting) return 'down';
    if (status === false && props.toasting) return 'up toasting';
    if (!status && !props.toasting) return 'up'
  }
  return (
    <Toast 
      theme={props.theme} 
      toasting={props.toasting}
      toastLevel={props.toastLevel}
      className={handleToastStatus(props.isOn)}
      toastLevelTime={props.toastLevelTime}
      data-testid="toast"
    />
  );
}

export default toast;