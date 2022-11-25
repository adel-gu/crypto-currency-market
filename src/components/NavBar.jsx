import { Container, Navbar, Button } from 'react-bootstrap';
import { GiFrozenBlock } from 'react-icons/gi';
import { BsGearFill, BsMicFill } from 'react-icons/bs';
import { TiArrowLeftThick } from 'react-icons/ti';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
          <StyledButton icon={<TiArrowLeftThick />} onClick={() => navigate(-1)}/>
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
