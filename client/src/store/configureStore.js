import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/rootReducer';

export default function configureStore() {
  const isInDevelopmentMode =
    process.env.NODE_ENV && process.env.NODE_ENV === 'development';
  const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers =
    reduxDevtools && isInDevelopmentMode ? reduxDevtools : compose;
  const middlewares = [thunk];
  return createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
