import { useEffect } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CoinList from '../components/CoinList';
import { retrieveCat } from '../redux/categories/categories';

const Home = () => {
  const cats = useSelector(state => state.cat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveCat());
  })

  return (
    <Container>
      <Nav>
        <NavDropdown title="Categroies" id="basic-nav-dropdown" className="border mx-auto">
          <NavDropdown.Item key={"all"}>All</NavDropdown.Item>
          {
            cats.map(cat => (<NavDropdown.Item key={cat["category_id"]}>{cat["name"]}</NavDropdown.Item>))
          }
        </NavDropdown>
      </Nav>
      <main>
        <CoinList />
      </main>
    </Container>
  );
}
export default Home;
