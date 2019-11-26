import styled from 'styled-components'

export const Toaster = styled.div`
  background: ${props => props.theme.lightBlue};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 250px;
  margin: 10em 0 0 0;
  padding: 0;
  position: relative;
  z-index: 2;

  .toaster-top {
    background: ${props => props.theme.darkBlue};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 1em 0;
    text-align: center;
  }

  .toaster-tray {
    background: ${props => props.theme.lightGrey};
    border-radius: 15px;
    display: block;
    height: 20px;
    width: 50%;
    margin: 0 auto;
  }

  .lever {
    background: white;
    height: 120px;
    width: 15px;
    float: right;
    margin-top: 30px;
    margin-right: 50px;
    position: relative;
    .handle {
      background: ${props => props.theme.lightGrey};
      border: 0;
      cursor: pointer;
      display: block;
      z-index: 4;
      height: 15px;
      width: 45px;
      left: -15px;
      position: relative;
      /* bottom: -105px; */
    }
  }

  .bars {
    left: 0;
    position: absolute;
    height: 100px;
    width: 30%;
    margin-top: 40px;
    z-index: 3;
    .bar {
      background: ${props => props.theme.darkBlue};
      display: block;
      height: 20px;
      margin-bottom: 1em;
      width: 100%;
    }
  }
`