import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import AddImage from '../../assets/add.png';
import {addCartItem, useStore} from '../../context/products-context';
// import RemoveImage from '../../assets/remove.png';
import styles from './styles';
type Props = {
  imgUrl: string;
  name: string;
  id: string;
};
const CardProduct: React.FC<Props> = ({imgUrl, name, id}: Props) => {
  // const image = {uri: imgUrl};
  const {setState, state} = useStore();
  const add = () => {
    if (state) {
      const {cartItems} = state;
      const newCartItems = addCartItem(cartItems, {imgUrl, name, id});
      setState({...state, cartItems: newCartItems});
    }
  };
  return (
    <View>
      <View style={styles.containerProductTitle}>
        <Text>{name}</Text>
      </View>
      <View style={styles.imageProductContainer}>
        <Image style={styles.imageProduct} source={{uri: imgUrl}} />
      </View>
      <TouchableOpacity onPress={add} style={styles.containerButton}>
        <Image style={styles.addIconImage} source={AddImage} />
        <Text style={styles.addLabel}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardProduct;
