import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const Coin = (props) => {
  const { coin } = props;
  const navigate = useNavigate();

  return (
    <div className="col-md-3 col-sm-6 p-3 border">
      <Card style={{width: "100%", height:"100%"}}>
        <Card.Header>
          <button type="button" className='' onClick={() => navigate('/coindetails')}>go</button>
        </Card.Header>
        <Card.Img variant="top" src={coin.image} className="w-25 mx-auto my-2"/>
        <Card.Body className=" text-end">
          <Card.Title className="m-0">{coin.name}</Card.Title>
          <Card.Text className="m-0">{coin["current_price"]}$</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Coin;