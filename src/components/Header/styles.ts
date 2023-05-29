import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
  },
  container: {
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: '2%',
    marginRight: 4,
  },
  headerLabel: {
    width: 40,
    height: 40,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '45%',
    paddingLeft: '29.8%',
  },
});

export default styles;
