import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Crops } from './crops';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
          crops:Crops,
          
      }),
      applyMiddleware(thunk, logger)
  );

  return store;
}
