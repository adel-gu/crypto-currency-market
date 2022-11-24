import coinReducer, { retrieveCoinDetails } from '../../redux/coins/coin';

// Fake coins data
const fakeCoin = {
  id: 'bitcoin',
  name: 'Bitcoin',
};

const fetchCoinDetailsSuccess = {
  type: retrieveCoinDetails.fulfilled,
  payload: fakeCoin,
};

const fetchCoinDetailsPending = {
  type: retrieveCoinDetails.pending,
  payload: fakeCoin,
};

describe('Dispatch the coinDetails thunk', () => {
  test('When its fullfilled it should return an object of single coin details', () => {
    const coin = coinReducer({}, fetchCoinDetailsSuccess);
    expect(coin.coinDetails.id).toBe('bitcoin');
  });

  test('When its pending it should return a falsy value', () => {
    const coin = coinReducer({}, fetchCoinDetailsPending);
    expect(coin.loading).toBeTruthy();
  });
});
