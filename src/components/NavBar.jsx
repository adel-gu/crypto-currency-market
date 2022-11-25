// React styled and bootstrap
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
// React Icons
import { GiFrozenBlock } from 'react-icons/gi';
import { BsGearFill, BsMicFill } from 'react-icons/bs';
import { TiArrowLeftThick } from 'react-icons/ti';
// React hooks
import { useNavigate } from 'react-router-dom';
// Component
import { StyledButton } from './StyledButton';

// Styled compoenent
const StyledNav = styled(Navbar)`
  background: #EC4C8B;
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
          <StyledButton icon={<TiArrowLeftThick />} handlNavigate={() => navigate(-1)}/>
          <Navbar.Brand className="mx-auto"><Logo className='display-6 fw-bold'/></Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center">
            <StyledButton icon={<BsMicFill />} />
            <StyledButton icon={<BsGearFill />} />
          </div>
        </Container>
      </StyledNav>
    </header>
);
}
export default NavBar;
