import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
// import SvgUri from 'react-native-svg-uri';
import SVGBag from '../../assets/shopping-bag.svg';
import {useStore} from '../../context/products-context';
import {TouchableOpacity} from 'react-native';
import HeaderBack from '../HeaderBack';
type Props = {
  onPress?: () => void | undefined;
  height?: string;
  goBack?: boolean;
  routeBack?: string;
};
const Header = (props: Props) => {
  // console.log(props);
  const {onPress, goBack} = props;
  const {state} = useStore();
  const {cartItems} = state;
  const cartCount =
    cartItems &&
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  const centralize100 = cartCount && cartCount >= 100;
  const centralize = cartCount && cartCount >= 10;
  const paddingLeft = centralize100 ? '19%' : centralize ? '29.8%' : '40%';
  const paddingValue = paddingLeft ? paddingLeft : '40%';

  return (
    <View style={styles.mainContainer}>
      {goBack && <HeaderBack onPress={onPress} />}
      <View
        //eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.container,
          height: props.height ? props.height : '105%',
        }}>
        <TouchableOpacity onPress={onPress}>
          <Text style={{...styles.headerLabel, paddingLeft: paddingValue}}>
            {cartCount ? cartCount : ''}
          </Text>
          {<SVGBag width={40} height={40} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
