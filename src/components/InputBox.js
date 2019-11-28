import React from 'react';
import styled from 'styled-components'

const MyInput = styled.input`
  bottom: -100px;
  left: 0;
  padding: 1em;
  position: absolute;
  width: 480px;
`

const InputBox = () => {
  return (
    <MyInput type="text" className="CypressTestBox" placeholder="This is just for cypress testing" />
  );
};

export default InputBox;