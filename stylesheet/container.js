import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    color: 'white',
    marginTop: Constants.statusBarHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
    flex: 11,
  },
  addMob: {
    alignSelf: 'flex-end',
    flex: 1,
  }
});

export default styles;