// Styled & bootstrap
import { Card, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
// React, Hooks and Redux
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { retrieveCoinDetails } from '../redux/coins/coin';

// Styling the details card

const DtailsCard = styled(Card)`
  background: #0E0E23;
  color: white;

  & div {
    background: #0E0E23;
    color: white;
  }
`;

const CoinDetails = () => {
  const coin = useSelector((state) => state.coin);
  const { coinId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveCoinDetails(coinId));
  }, []);

  return (
    <>
      {
      coin.loading ? (<p>Loading...</p>) : (
        <DtailsCard className="py-5 border-0 rounded-0">
          <Card.Img variant="top" className="w-50 mx-auto" src={coin.coinDetails.image.large} />
          <Card.Body>
            <Card.Title>{coin.coinDetails.name}</Card.Title>
            <Card.Text>{coin.coinDetails.description.en}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush border rounded-0">
            <ListGroup.Item>
              <span className="fw-bold">Category:</span>
              {coin.coinDetails.categories[0]}
            </ListGroup.Item>
            <ListGroup.Item className="border">
              <span className="fw-bold">Market Ranking:</span>
              {coin.coinDetails.market_cap_rank}
            </ListGroup.Item>
            <ListGroup.Item className="border">
              <span className="fw-bold">Market Cap:</span>
              {coin.coinDetails.market_data.market_cap.usd}
              $
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold">Current Price:</span>
              {coin.coinDetails.market_data.current_price.usd}
              $
            </ListGroup.Item>
          </ListGroup>
        </DtailsCard>
      )
      }
    </>
  );
};

export default CoinDetails;
