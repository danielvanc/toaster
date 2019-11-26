import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: #F38EB0;
    padding: 2em;
  }
`
export const theme = {
  lightBlue: "#4ECFE2",
  darkBlue: "#3E9DAB",
  lightGrey: "#333",
  breadBody: "#FCDB78",
  breadCrust: "#C47C36",
  lightlyDone: "#888",
  mediumDone: "#444",
  overDone: "#222"
}

export const AppContainer = styled.div`
  border:0;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 500px;
  h1 {
    color: white;
  }
`

export const Wheel = styled.span`
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