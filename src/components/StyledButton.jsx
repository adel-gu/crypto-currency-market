import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Btn = styled(Button)`
  background: none;
  border: none;
  color: white;

  &:hover {
    color: #0E0E23;
  };
`;

export default Btn;
