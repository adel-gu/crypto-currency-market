import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
// Component
import CoinList from '../../components/CoinList';

describe('CoinList component', () => {
  test('should rendered correctly', () => {
    render(
      <Provider store={store}>
        <CoinList />
      </Provider>,
    );
    expect(screen).toMatchSnapshot();
  });
});
