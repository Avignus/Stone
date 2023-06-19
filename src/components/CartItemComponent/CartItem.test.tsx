import React from 'react';
import {render} from '@testing-library/react-native';
import CartItem from './index';

const item = {
  id: '1',
  name: 'Product 1',
  imgUrl: 'https://imgUrl.com/image.png',
  quantity: 5,
};
test('renders correctly', () => {
  render(<CartItem cartItem={item} />);
});
