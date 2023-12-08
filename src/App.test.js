import { render, screen } from '@testing-library/react';

import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Admin from './components/Admin';

test('renders App component', () => {
  render(<App />);
});

test('renders SignIn component', () => {
  render(<SignIn />);
});

test('renders SignUp component', () => {
  render(<SignUp />);
});

test('renders Products component', () => {
  render(<Products />);
});

test('renders Admin component', () => {
  render(<Admin />);
});
