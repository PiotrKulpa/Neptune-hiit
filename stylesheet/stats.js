import { StyleSheet } from 'react-native';
import { colors } from './index';

const styles = StyleSheet.create({
  tableBox: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    // paddingTop: 60,
    // paddingBottom: 100,
    flex: 1
  },
  tableHeader: { 
    borderColor: 'gray', 
    borderBottomWidth: 1, 
    color: 'white',
    flexWrap: 'nowrap',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // alignItems: 'stretch',
    // alignSelf: 'stretch',
    paddingVertical: 10,
  },
  tableRow: { 
    borderColor: 'gray', 
    borderBottomWidth: 1, 
    color: 'white',
    flexWrap: 'nowrap',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 10,
    // alignSelf: 'stretch',
  },
  tableTd: {
    color: 'white',
    flex: 1,
    fontSize: 16,
  },
  
});

export default styles;