// Styled and bootsrap
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

// React, Routers & Redux
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { retrieveCat } from '../redux/categories/categories';
import { retrieveCoins } from '../redux/coins/coins';

// Components
import CoinList from '../components/CoinList';

// Styling components
const DropMenu = styled(NavDropdown)`
  & > a {
    color: #ffc107;
  }

  & > a:hover {
    color: #f9d25d;
  }

  & > a:focus {
    color: #f9d25d;
  }

  & div {
    max-height: 400px;
    overflow-y: scroll;
    padding-top: 0;
    margin-top: -0.6rem;
    border-radius: 0px;
  }
`;

const Home = () => {
  const cats = useSelector((state) => state.cat);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(retrieveCat());
  }, []);

  const handlFilter = (id) => {
    dispatch(retrieveCoins(id));
    navigate(`/${id}`);
  };

  return (
    <>
      <Nav>
        <DropMenu title="Filter Currencies by Categories" id="basic-nav-dropdown" className="bg-none mx-auto mt-3 mb-5">
          <Dropdown.Item key="all" onClick={() => handlFilter('all')}>All</Dropdown.Item>
          {
            cats.map((cat) => (
              <NavDropdown.Item
                key={cat.category_id}
                onClick={() => handlFilter(cat.category_id)}
              >
                {cat.name}
              </NavDropdown.Item>
            ))
          }
        </DropMenu>
      </Nav>
      <main>
        <CoinList />
      </main>
    </>
  );
};

export default Home;
