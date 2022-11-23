import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CoinDetails = () => {
  const coin = useSelector(state => state.coins.coinDetails);
  const navigate = useNavigate();
  console.log(coin);
  return (
    <Container>
      <h1>BTC is awsome</h1>
      <button type="button" onClick={() => navigate(-1)}>Go Back</button>
    </Container>
  );
};

export default CoinDetails;
