import React from 'react';
import {render} from '@testing-library/react-native';
import CardProduct from '.';

test('Renders correctly', () => {
  render(
    <CardProduct
      name="Product 1"
      id="1"
      imgUrl="https://test-image.com"
      key="1"
    />,
  );
});
