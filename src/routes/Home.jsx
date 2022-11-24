import { useEffect } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CoinList from '../components/CoinList';
import { retrieveCat } from '../redux/categories/categories';
import { retrieveCoins } from '../redux/coins/coins';

const Home = () => {
  const cats = useSelector(state => state.cat);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate =  useNavigate();

  useEffect(() => {
    dispatch(retrieveCat());
  }, [])

  const handlFilter = (id) => {
    dispatch(retrieveCoins(id));
    navigate(`/${id}`);
  }

  return (
    <Container>
      <Nav>
        <NavDropdown title="Categroies" id="basic-nav-dropdown" className="border mx-auto">
          <NavDropdown.Item key={"all"} onClick={() => handlFilter("all")}>All</NavDropdown.Item>
          {
            cats.map(cat => (<NavDropdown.Item key={cat["category_id"]} onClick={() => handlFilter(cat["category_id"])}>{cat["name"]}</NavDropdown.Item>))
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
