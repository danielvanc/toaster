import styled from 'styled-components'

export const HeatLevelBar = styled.ul`
  background: ${props => props.theme.lightGrey};
  border-radius: 25px;
  display: inline-flex;
  justify-content: space-between;
  height: 25px;
  width: 160px;
  bottom: 15px;
  left: 5px;
  list-style: none;
  position: absolute;
  span {
      font-size: 11px;
      position: absolute;
      top: -19px;
      width: 52px;
  }
  button {
    background: #111;
    border: 2px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    height: 25px;
    width: 25px;
    &.active {
      background: ${props => props.theme.darkBlue};
      border: 2px solid yellow;
    }
  }
`