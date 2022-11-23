import { Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="mx-auto">Coins</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;