import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import { retrieveCoinDetails } from '../redux/coins/coin';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
  const coin = useSelector(state => state.coin);
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=> {
    dispatch(retrieveCoinDetails(coinId));
  }, [])

  return (
    <Container>
      <button type="button" onClick={() => navigate(-1)}>Go Back</button>
      {
        coin.loading ? (<p>Loading...</p>) :
        (<Card>
          <Card.Img variant="top" className="w-75 mx-auto" src={coin.coinDetails.image.large} />
          <Card.Body>
            <Card.Title>{coin.coinDetails.name}</Card.Title>
            <Card.Text>{coin.coinDetails.description.en}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Category: {coin.coinDetails.categories[0]}</ListGroup.Item>
            <ListGroup.Item>Market Ranking: {coin.coinDetails["market_cap_rank"]}</ListGroup.Item>
            <ListGroup.Item>Market Cap: {coin.coinDetails["market_data"]["market_cap"]["usd"]}$</ListGroup.Item>
            <ListGroup.Item>Current Price: {coin.coinDetails["market_data"]["current_price"]["usd"]}$</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <button type="button" onClick={() => navigate(-1)}>Go Back</button>
          </Card.Body>
        </Card>)
      }
    </Container>
  );
};

export default CoinDetails;
