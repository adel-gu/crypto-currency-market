import { render, screen } from '@testing-library/react';
import Home from '../../routes/Home';
import store from '../../redux/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Home component', () => {
  test('should rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen).toMatchSnapshot();
  });
});
