import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import CartItemComponent from '../../components/CartItemComponent/';
import {useStore} from '../../context/products-context';
const Cart = ({navigation}: StackScreenProps<any, any>) => {
  const {state} = useStore();
  const {cartItems} = state;

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header goBack onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={styles.containerContent}>
          {cartItems.map(cartItem => (
            <CartItemComponent key={cartItem.id} cartItem={cartItem} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
