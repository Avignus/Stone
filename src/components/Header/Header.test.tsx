import React from 'react';
import {render} from '@testing-library/react-native';
import Header from './index';
import {CartItem} from 'src/context/products-context';
let mockCartItems: CartItem[] = [];
let mockState = {
  cartItems: mockCartItems,
  isTestingMode: true,
};
// let mockUseStore = () => null;
jest.mock('../../context/hooks/useStore', () => {
  return jest.fn(() => ({
    state: mockState,
  }));
});
test('Renders correctly', () => {
  mockState.cartItems = [
    {
      id: '1',
      name: 'Product 1',
      imgUrl: 'https://imgUrl.com/image',
      quantity: 10,
    },
  ];

  render(<Header />);
});
