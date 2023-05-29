import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerProductTitle: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 12,
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProductContainer: {width: '100%', alignItems: 'center'},
  imageProduct: {
    width: 180,
    height: 150,
    borderRadius: 12,
  },
  containerButton: {
    flexDirection: 'row',
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIconImage: {
    width: 20,
    height: 20,
    borderRadius: 12,
  },
  addLabel: {
    paddingRight: 5,
    paddingLeft: 5,
  },
});

export default styles;
