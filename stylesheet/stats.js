import { StyleSheet } from 'react-native';
import { colors } from './index';

const styles = StyleSheet.create({
  tableBox: {
    flex: 1,
    width: 300
  },
  tableHeader: { 
    borderColor: 'gray', 
    borderBottomWidth: 1, 
    color: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tableRow: { 
    borderColor: 'gray', 
    borderBottomWidth: 1, 
    color: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tableTd: {
    color: 'white',
    flex: 1,
    fontSize: 16,
  },
  
});

export default styles;