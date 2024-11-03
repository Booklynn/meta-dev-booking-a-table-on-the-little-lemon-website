import { render, screen } from '@testing-library/react';
import App from './App';

test('renders little lemon title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Little Lemon/i);
  expect(titleElement).toBeInTheDocument();
});
