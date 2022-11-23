import { Container, Nav, NavDropdown } from 'react-bootstrap';
import CoinList from '../components/CoinList';

const Home = () => (
  <Container>
    <Nav>
      <NavDropdown title="Categroies" id="basic-nav-dropdown" className="border mx-auto">
        <NavDropdown.Item>Ed</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <main>
      <CoinList />
    </main>
  </Container>
);

export default Home;
