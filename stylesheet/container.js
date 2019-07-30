import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    flex: 1,
  },
  content: {
    color: 'white',
    marginTop: Constants.statusBarHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 11,
    paddingHorizontal: 30
  },
  addMob: {
    alignSelf: 'flex-end',
    flex: 1,
  }
});

export default styles;