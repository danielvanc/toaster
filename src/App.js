import React from 'react';
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import Toaster from './components/toaster'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: #F38EB0;
    padding: 2em;
  }
`
const theme = {
  lightBlue: "#4ECFE2",
  darkBlue: "#3E9DAB",
  lightGrey: "#333",
  breadBody: "#FCDB78",
  breadCrust: "#C47C36",
  lightlyDone: "#888",
  mediumDone: "#444",
  overDone: "#222"
}

const AppContainer = styled.div`
  border:0;
  margin: 0 auto;
  position: relative;
  width: 500px;
`

const Wheel = styled.span`
  /* border: 10px solid #555; */
  background: #555;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  z-index: -1;
  position: absolute;
  bottom: -20px;
  &.wheel1 {
    left: 25px;
  }
  &.wheel2 {
    right: 30px;
  }
`

const App = () => (
  <AppContainer className="app-container">
    <Helmet>
      <title>Toaster!</title>
    </Helmet>
    <GlobalStyles />
    <h1>Toaster</h1>
    {
      /* 
        Toaster.
        1. On/off state
        2. Light/Dark state. 
        3. A timer
      */
    }
    <Toaster theme={theme} />
    <Wheel className="wheel1"></Wheel>
    <Wheel className="wheel2"></Wheel>
  </AppContainer>
);

export default App;
