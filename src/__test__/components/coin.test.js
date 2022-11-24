import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// Component
import Coin from '../../components/Coin';

// Mock Data props
const coin = {
  id: 'bitcoin',
  name: 'Bitcoin',
  image: '',
  current_price: 1000,
};

describe('NavBar component', () => {
  test('should rendered correctly', () => {
    render(
      <BrowserRouter>
        <Coin coin={coin} />
      </BrowserRouter>,
    );
    expect(screen).toMatchSnapshot();
  });
});
