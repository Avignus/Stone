import React, {useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import CardProduct from '../../components/CardProduct';
import styles from './styles';
import {useStore} from '../../context/products-context';
import {fetchCoffeeStores} from '../../services/coffee-stores';
import Header from '../../components/Header';
import {StackScreenProps} from '@react-navigation/stack';
const Home = ({navigation}: StackScreenProps<any, any>) => {
  const {setState, state} = useStore();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoffeeStores();
      setState({...state, products: data});
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (state && state.products) {
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Header onPress={() => navigation.navigate('Cart')} />
        </View>
        <View style={styles.container}>
          {state.products.map(product => (
            <CardProduct
              id={product.id}
              name={product.name}
              imgUrl={product.imgUrl}
              key={product.id}
            />
          ))}
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Nenhum item retornado</Text>
      </View>
    );
  }
};

export default Home;
