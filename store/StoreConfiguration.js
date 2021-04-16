import { createStore, combineReducers, applyMiddleware } from 'redux';
import UserReducer from './reducers/UserReducers';
import ChatReducer from './reducers/ChatReducers';
import ReduxThunk from 'redux-thunk';

// We pass the reducer to that store
const rootReducer = combineReducers({
    UserReducer,
    ChatReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;