import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';


const configureStore = (preloadedState) => {
  const middleware = [thunk];
  const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middleware)));
  return store;
}


export default configureStore;