import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Views } from './types';

test('renders learn react link', () => {
  render(<App view={Views.Home}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
