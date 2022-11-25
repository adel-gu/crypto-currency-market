// React styled and bootstrap
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
// React Icons
import { GiFrozenBlock } from 'react-icons/gi';
import { TiArrowLeftThick } from 'react-icons/ti';
import { BsMicFill, BsGearFill } from 'react-icons/bs';
// React hooks
import { useNavigate } from 'react-router-dom';
// Component
import Btn from './StyledButton';

// Styled compoenent
const StyledNav = styled(Navbar)`
  background: #0E0E23;
`;

const Logo = styled(GiFrozenBlock)`
  color: white;
`;

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <StyledNav>
        <Container>
          <Btn variant="warning" type="button" className="d-flex justify-content-center align-items-center rounded-circle p-2" onClick={() => navigate(-1)}>
            <TiArrowLeftThick />
          </Btn>
          <Navbar.Brand className="mx-auto"><Logo className="display-6 fw-bold" /></Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center">
            <Btn variant="warning" type="button" className="d-flex justify-content-center align-items-center rounded-circle p-2">
              <BsMicFill />
            </Btn>
            <Btn variant="warning" type="button" className="d-flex justify-content-center align-items-center rounded-circle p-2">
              <BsGearFill />
            </Btn>
          </div>
        </Container>
      </StyledNav>
    </header>
  );
};

export default NavBar;
