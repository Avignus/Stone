import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import chevronLeft from '../../assets/chevron-left.png';
import styles from './styles';
type Props = {
  onPress?: () => void | undefined;
};
const HeaderBack = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.button}>
        <Image source={chevronLeft} style={styles.chevronIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBack;
