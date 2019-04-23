import { StyleSheet } from 'react-native';
import { colors } from './index';

const styles = StyleSheet.create({
  inputs: {
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 1, 
    color: 'white',
  },
  labels: {
    color: colors.middleBlue,
    marginTop: 20,
  },
  setsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  }
});

export default styles;