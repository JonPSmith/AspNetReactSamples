import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from "redux-throttle";
import reducers from '../reducers/index';

const defaultThrottleOption = { // https://lodash.com/docs#throttle
  leading: true,
  trailing: false
}

const throttleMiddleWare = throttle(500, defaultThrottleOption);    //default 500ms, 

const reduxStore = createStore(
   reducers,
   applyMiddleware(thunk, throttleMiddleWare) 
);

export default reduxStore; 