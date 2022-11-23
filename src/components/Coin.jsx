import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Coin = () => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '10rem' }}>
      <div className="display-3 text-center py-4">BTC</div>
      <Card.Body className="py-0 text-end">
        <Card.Title className="m-0">Bitcoin</Card.Title>
        <Card.Text className="m-0">15750.43$</Card.Text>
        <button type="button" onClick={() => navigate('/coindetails')}>go</button>
      </Card.Body>
    </Card>
  );
};

export default Coin;
