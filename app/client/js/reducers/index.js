import { combineReducers } from 'redux';
import bars from './bars';
import products from './products';
import orders from './orders';

const rootReducer = combineReducers({
  bars,
  products,
  orders
});

export default rootReducer;