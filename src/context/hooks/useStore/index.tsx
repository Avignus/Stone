import React from 'react';
import {StoreContext} from '../../products-context';
import {IGetterAndSetter} from '../../products-context';
const useStore = (): IGetterAndSetter => {
  return React.useContext(StoreContext);
};

export default useStore;
