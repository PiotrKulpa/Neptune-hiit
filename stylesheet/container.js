import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    height: '100%'
  },
  content: {
    color: 'white',
    marginTop: Constants.statusBarHeight + 60,
    alignSelf: 'center',
  },
});

export default styles;