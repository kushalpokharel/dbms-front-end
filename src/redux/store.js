import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Crops } from './crops';
import { Districts } from './districts';
import {Production} from './production';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
          crops:Crops,
          districts: Districts,
          production: Production
      }),
      applyMiddleware(thunk, logger)
  );

  return store;
}
