import { StyleSheet } from 'react-native';
import { colors } from '.';

const styles = StyleSheet.create({
  btnBg: {
    backgroundColor: colors.lightRed, 
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 150,
    borderRadius: 20,
    shadowColor: '#fff',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,

  },
  btnTxt: {
    color: colors.text,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default styles;