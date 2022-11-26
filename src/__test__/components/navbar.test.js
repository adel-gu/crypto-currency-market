import { render, screen } from '@testing-library/react';
// Component
import NavBar from '../../components/NavBar';

describe('NavBar component', () => {
  test('should rendered correctly', () => {
    render(<NavBar />);
    expect(screen).toMatchSnapshot();
  });
});
