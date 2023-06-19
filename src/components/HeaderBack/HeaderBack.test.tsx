import React from 'react';
import {render} from '@testing-library/react-native';
import HeaderBack from '.';
test('Renders correctly', () => {
  const onPress = jest.fn();
  render(<HeaderBack onPress={onPress} />);
});
