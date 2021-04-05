import {combineReducers} from 'redux';
import shopReducer from './Shopping/shoppingReducer';
import loginReducer from './Login/loginReducer'
const rootReducer = combineReducers({
    shop: shopReducer,
    login:loginReducer,
  });
  
export default rootReducer;