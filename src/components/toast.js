import React, { Component } from 'react';
import styled from 'styled-components'

const Toast = styled.div`
  background: ${props => props.theme.breadBody};
  border: 3px solid ${props => props.theme.breadCrust};
  border-bottom: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 130px;
  width: 160px;
  margin: 0 auto;
  position: relative;
  &.up {
    top: -116px;
  }
  &.down {
    height: 28px;
    top: -10px;
  }
`

class toast extends Component {
  render() {
    return (
      <Toast theme={this.props.theme} className="up" />
    );
  }
}

export default toast;