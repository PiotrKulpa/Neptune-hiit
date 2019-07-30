import { StyleSheet } from 'react-native';
import { colors } from './index';

const styles = StyleSheet.create({
  tableBox: {
    flex: 1,
    width: 300,
    marginTop: 60,
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
    paddingVertical: 10,
  },
  tableTd: {
    color: 'white',
    flex: 1,
    fontSize: 16,
  },
  
});

export default styles;