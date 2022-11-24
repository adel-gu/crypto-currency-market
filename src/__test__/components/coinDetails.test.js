import { render, screen } from '@testing-library/react';
import CoinDetails from '../../routes/CoinDetails';
import store from '../../redux/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
