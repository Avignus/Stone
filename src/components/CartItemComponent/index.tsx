import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import chevronLeft from '../../assets/chevron-left.png';
import chevronRight from '../../assets/chevron-right.png';
import trash from '../../assets/trash.png';
import {
  CartItem,
  useStore,
  removeCartItem,
  addCartItem,
} from '../../../src/context/products-context';
type Props = {
  cartItem: CartItem;
};
const CartItemComponent = (props: Props) => {
  const {cartItem} = props;
  const {id, name, imgUrl, quantity} = cartItem;
  const {state, setState} = useStore();

  const remove = () => {
    const {cartItems} = state;
    const newCartItems = removeCartItem(cartItems, cartItem);
    setState({...state, cartItems: newCartItems});
  };

  const add = () => {
    const {cartItems} = state;
    if (state) {
      const newCartItems = addCartItem(cartItems, {imgUrl, name, id});
      setState({...state, cartItems: newCartItems});
    }
  };

  const clearCartItem = (cartItemsList: CartItem[], itemToClear: CartItem) =>
    cartItemsList.filter(item => item.id !== itemToClear.id);
  const clear = () => {
    const {cartItems} = state;
    if (state) {
      const newCartItems = clearCartItem(cartItems, cartItem);
      setState({...state, cartItems: newCartItems});
    }
  };
  return (
    <View style={styles.containerContent}>
      <View style={styles.productContainer}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.photo}
            source={{
              uri: imgUrl,
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.productName}>{name}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <TouchableOpacity onPress={remove}>
            <Image style={styles.chevron} source={chevronLeft} />
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <Text>{quantity}</Text>
          </View>
          <View style={styles.chevronContainer}>
            <TouchableOpacity onPress={add}>
              <Image style={styles.chevron} source={chevronRight} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.trashContainer}>
          <TouchableOpacity onPress={clear} style={styles.removeButton}>
            <Text>Remover</Text>
            <Image style={styles.chevron} source={trash} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CartItemComponent;
