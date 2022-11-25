// Bootstrap and styled-component
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
// Icons
import { BsArrowRightCircle } from 'react-icons/bs';
import { StyledButton } from './StyledButton';
// React Hooks
import { useNavigate, useParams } from 'react-router-dom';

// Styling coin
const CoinCmp = styled(Card)`
  color: white;
  background: #0E0E23;
  width: 100%;
  height: 100%;
  border: none;

  & div {
    background: #0E0E23;
  };
`;

const Coin = (props) => {
  const { coin } = props;
  const navigate = useNavigate();
  const { coinsCategory } = useParams();

  const hadnlNavigate = (coinId) => {
    coinsCategory === undefined ? navigate(`/all/${coinId}`) : navigate(`/${coinsCategory}/${coinId}`)
  }

  return (
    <div className="col-6 col-md-4 p-0 border">
      <CoinCmp className="rounded-0">
        <div className="d-flex justify-content-end align-items-center">
          <StyledButton icon={<BsArrowRightCircle/>} handlNavigate={() => hadnlNavigate(coin.id)}/>
        </div>
        <Card.Img variant="top" src={coin.image} className="w-25 mx-auto my-2"/>
        <Card.Body className=" text-end">
          <Card.Title className="m-0">{coin.name}</Card.Title>
          <Card.Text className="m-0">{coin["current_price"]}$</Card.Text>
        </Card.Body>
      </CoinCmp>
    </div>
  );
};

export default Coin;