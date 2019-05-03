import { StyleSheet } from 'react-native';
import { colors } from './index';

const styles = StyleSheet.create({
  inputs: {
    height: 40, 
    borderColor: '#5879bf', 
    borderBottomWidth: 1, 
    color: 'white',
    marginLeft: 20,
  },
  inputsRest: {
    marginLeft: 0,
    paddingLeft: 20,
  },
  labels: {
    color: colors.middleBlue,
    marginTop: 20,
    marginLeft: 20,
  },
  setsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderColor: '#5879bf', 
    borderBottomWidth: 1, 
  },
  setsLabel: {
    flexDirection: 'row',
    flex: 1,
  },
  btnsLabel: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

export default styles;