import { combineReducers } from 'redux';

const setIntervals = (state = [5, 30], action) => {
  switch(action.type) {
    case 'SET_INTERVALS':
      return action.payload
    default:
      return state
  }
};

export default combineReducers({
  intervals: setIntervals
})