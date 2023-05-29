import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerContent: {
    width: '100%',
    height: 100,
    // backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 0.5,
    marginTop: 5,
    borderColor: 'black',
  },
  productContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    borderRadius: 12,
    marginLeft: 10,
    paddingLeft: 5,
    width: 80,
    height: 80,
  },
  productName: {
    // marginLeft: 10,
  },
  chevron: {
    width: 20,
    height: 20,
  },
  itemContainer: {
    width: '30%',
  },
  chevronContainer: {
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
  },
  quantityContainer: {
    width: '33%',
    display: 'flex',
    alignItems: 'center',
  },
  trashContainer: {
    width: '25%',
  },
  removeButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
