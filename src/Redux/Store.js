import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers';


const middleware = [thunk];
const thunkMiddleware = applyMiddleware(...middleware);
const store = createStore(reducers, composeWithDevTools(
thunkMiddleware
));

export default store;