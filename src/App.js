import React from 'react';
import Helmet from 'react-helmet'
import { GlobalStyles, theme, AppContainer, Wheel } from './components/App.css'
import Toaster from './components/toaster'

const App = () => (
  <AppContainer className="app-container">
    <Helmet>
      <title>Toaster!</title>
    </Helmet>
    <GlobalStyles />
    <h1>Toaster!</h1>
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
