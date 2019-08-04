import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%', 
    height: '100%'
  },
  content: {
    color: 'white',
    marginTop: Constants.statusBarHeight + 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 9,
    paddingHorizontal: 30
  },
  addMob: {
    // alignSelf: 'center',
    // flex: 1,
  }
});

export default styles;