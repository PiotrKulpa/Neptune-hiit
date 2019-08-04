import { StyleSheet } from 'react-native';
import { colors } from './index';

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderColor: 'rgba(142, 152, 173, 0.5)', 
    borderBottomWidth: 1,
    // flex: 1,
  },
  inputsNumber: {
    // flex: 1,
    marginRight: 10,
  },
  inputsRow: {
    flex: 1,
  },
  inputs: {
    color: 'white',
    marginLeft: 20,
    
  },
  inputsActive: {
    marginLeft: 5,
    borderColor: 'rgba(142, 152, 173, 0.5)', 
    borderBottomWidth: 1, 
    color: 'white',
    fontSize: 20,
    // width: '100%'
  },
  inputsRest: {
    paddingLeft: 5,
    color: 'white',
    fontSize: 20,
  },
  inputRestBox: {
     
  },
  labels: {
    color: colors.middleBlue,
    marginTop: 20,
    marginLeft: 5,
  },
  setsBox: {
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // flex: 1,
    borderColor: 'rgba(142, 152, 173, 0.5)', 
    borderBottomWidth: 1,  
  },
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flex: 1,
    width: '100%',
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
  },
  inputsNumberTxt: {
    color: colors.middleBlue,
    textAlign: 'center',
    fontSize: 12,
  },
  inputsNumberTxtBorder: {
    borderRadius: 10,
    borderColor: colors.middleBlue,
    borderWidth: 1,
    width: 20,
    height: 20,
  },
});

export default styles;