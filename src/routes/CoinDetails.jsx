import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const CoinDetails = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>BTC is awsome</h1>
      <button type="button" onClick={() => navigate(-1)}>Go Back</button>
    </Container>
  );
};

export default CoinDetails;
