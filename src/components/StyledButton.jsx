import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';


const Btn = styled(Button)`
  background: none;
  border: none;
  color: white;

  &:hover {
    background: #e6d82f;
    color: #EC4C8B;
  };
`;

export const StyledButton = (props) => {
  return (
    <Btn type="button" className="d-flex justify-content-center align-items-center rounded-circle p-2" onClick={props.handlNavigate}>{props.icon}</Btn>
  )
}
