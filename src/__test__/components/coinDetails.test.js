import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CoinDetails from '../../routes/CoinDetails';
import store from '../../redux/configureStore';

describe('Home component', () => {
  test('should rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen).toMatchSnapshot();
  });
});
