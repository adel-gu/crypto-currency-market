import coinsReducer, { retrieveCoins } from '../../redux/coins/coins';

// Fake coins data
const fakeCoins = [
  { id: 'bitcoin', name: 'Bitcoin' },
  { id: 'ethereum', name: 'Ethereum' },
];

const fetchCoins = {
  type: retrieveCoins.fulfilled,
  payload: fakeCoins,
};

describe('Dispatch the coinDetails thunk', () => {
  test('Should return an object of single coin details', () => {
    const coins = coinsReducer({}, fetchCoins);
    expect(coins.coins).toHaveLength(2);
  });
});
