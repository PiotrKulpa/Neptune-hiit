import { StyleSheet } from 'react-native';
import { colors } from '.';

const styles = StyleSheet.create({
  applyBtnBg: {
    height: 50,
    width: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: '#fff',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    marginHorizontal: 5,
    backgroundColor: colors.lightRed,
    margin: 5,
  },
  btnTxt: {
    color: colors.text,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default styles;