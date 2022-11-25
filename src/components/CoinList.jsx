import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { retrieveCoins } from '../redux/coins/coins';
import Coin from './Coin';

const CoinList = () => {
  const coins = useSelector((state) => state.coins.coins);
  const dispatch = useDispatch();
  const { coinsCategory } = useParams();

  useEffect(() => {
    dispatch(retrieveCoins(coinsCategory === undefined ? 'all' : coinsCategory));
  }, []);

  return (
    <div className="row">
      {
        coins.map((coin) => (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            image={coin.image}
            currentPrice={coin.current_price}
          />
        ))
      }
    </div>
  );
};
export default CoinList;
