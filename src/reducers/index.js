import { combineReducers } from 'redux';
import CalculateReducer from './reducer-calculate';

const rootReducer = combineReducers({
  calculation: CalculateReducer
});

export default rootReducer;
