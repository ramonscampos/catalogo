import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import {render, screen} from 'react-test-renderer'
import App from '../src/App';

it('calculate the cart total', () => {
  const

  expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
    'My Name Is: Unknown',
  )

  renderer.create(<App />);
});
