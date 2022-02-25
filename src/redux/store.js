import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = compose(composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(rootReducer, composedEnhancer);

export default store;

//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()