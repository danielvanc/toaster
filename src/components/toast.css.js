import styled from 'styled-components'

export const Toast = styled.div`
  background: white;
  border: 3px solid ${props => props.theme.breadCrust};
  border-bottom: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 130px;
  width: 160px;
  margin: 0 auto;
  position: relative;
  &.toasted {
    background: ${props => props.theme[props.toastLevel]};
  }
  &.up {
    top: -116px;
    transition: all 1s ease-out;
  }
  &.down {
    height: 28px;
    top: -10px;
    transition: all 1s ease-out;
  }
`;