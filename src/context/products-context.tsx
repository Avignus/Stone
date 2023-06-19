import React, {useEffect} from 'react';
import {createContext, useState} from 'react';
export type Product = {
  id: string;
  name: string;
  imgUrl: string;
};
export type CartItem = {
  id: string;
  name: string;
  imgUrl: string;
  quantity: number;
};
type ObjectToSet = {
  products: Product[];
  cartItems: CartItem[];
  isTestingMode: boolean;
};

export interface IGetterAndSetter {
  state: {
    products: Product[];
    cartItems: CartItem[];
    isTestingMode: boolean;
  };
  setState: (items: ObjectToSet) => void;
}
export const StoreContext = createContext<IGetterAndSetter>(
  {} as IGetterAndSetter,
);
type ContextProps = {
  children: JSX.Element;
};

export const addCartItem = (
  cartItems: Array<CartItem>,
  cartItemToAdd: CartItem,
) => {
  const existingCartItem =
    cartItems && cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  if (cartItems && existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem,
    );
  } else if (!cartItems) {
    return [{...cartItemToAdd, quantity: 1}];
  } else {
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
  }
};

export const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem,
) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem,
  );
};

const StoreProvider = ({children}: ContextProps) => {
  const [state, setState] = useState<ObjectToSet>({
    products: [],
    cartItems: [],
    isTestingMode: false,
  });

  useEffect(() => {
    if (state && state.cartItems) {
      console.log(state.cartItems);
    }
  }, [state]);

  const GetterAndSetter: IGetterAndSetter = {
    state,
    setState,
  };

  return (
    <StoreContext.Provider value={GetterAndSetter}>
      {children}
    </StoreContext.Provider>
  );
};
export const useStore = (): IGetterAndSetter => {
  return React.useContext(StoreContext);
};
export default StoreProvider;
