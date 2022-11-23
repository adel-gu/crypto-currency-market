import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CoinDetails=()=> {
  const navigate = useNavigate();
  return(
    <Container>
      <h1>BTC is awsome</h1>
      <Link onClick={() => navigate(-1)}>Go Back</Link>
    </Container>
  )
}

export default CoinDetails;