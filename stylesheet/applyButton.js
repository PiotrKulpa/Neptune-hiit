import { StyleSheet } from 'react-native';
import { colors } from '.';

const styles = StyleSheet.create({
  applyBtnBg: {
    height: 60,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#fff',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    marginVertical: 10,
  },
  btnTxt: {
    color: colors.text,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default styles;