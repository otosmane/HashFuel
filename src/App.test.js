// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HashFuel title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HashFuel/i);
    expect(titleElement).toBeInTheDocument();
});
