import {createStore} from 'redux';
// import loginReducer from './Login/loginReducer';
import rootReducer from './rootReducer';
import  { composeWithDevTools } from "redux-devtools-extension";


// const store=createStore(loginReducer)
const store=createStore(rootReducer, composeWithDevTools());

// const store=createStore()
export default store;