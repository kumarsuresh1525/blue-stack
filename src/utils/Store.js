import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const browserHistory = createHistory();

const middleware = applyMiddleware(thunk, routerMiddleware(browserHistory));

export default createStore(rootReducer, middleware);
