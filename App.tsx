import React from 'react';
import MainStack from './src/Routes/router';
import StoreProvider from './src/context/products-context';
function App(): JSX.Element {
  return (
    <StoreProvider>
      <MainStack />
    </StoreProvider>
  );
}

export default App;
