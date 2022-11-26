// React Hooks
import { useNavigate, useParams } from 'react-router-dom';
// props
import PropTypes from 'prop-types';
// Bootstrap and styled-component
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { BsArrowRightCircle } from 'react-icons/bs';
import Btn from './StyledButton';

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

const Coin = ({
  id,
  name,
  image,
  currentPrice,
}) => {
  const navigate = useNavigate();
  const { coinsCategory } = useParams();

  const handleNavigate = (coinId) => {
    if (coinsCategory === undefined) {
      navigate(`/all/${coinId}`);
      return;
    }
    navigate(`/${coinsCategory}/${coinId}`);
  };

  return (
    <div className="col-6 col-md-4 p-0 border">
      <CoinCmp className="rounded-0 px-3 pt-1">
        <div className="d-flex justify-content-end align-items-center">
          <Btn variant="warning" type="button" className="d-flex justify-content-center align-items-center rounded-circle p-2" onClick={() => handleNavigate(id)}>
            <BsArrowRightCircle />
          </Btn>
        </div>
        <Card.Img variant="top" src={image} className="w-25 mx-auto my-2" />
        <Card.Body className=" text-end">
          <Card.Title className="m-0">{name}</Card.Title>
          <Card.Text className="m-0">
            {currentPrice}
            $
          </Card.Text>
        </Card.Body>
      </CoinCmp>
    </div>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default Coin;
