import {createStore, applyMiddleware} from 'react-redux';
import RootReducer from './reducers';

export default function configureStore(initialState) {
    const store = createStore(RootReducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
          const nextRootReducer = require('./reducers');
          store.replaceReducer(nextRootReducer)
        })
      }
    return store;
}