import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/UserReducers';
import ChatReducer from './reducers/ChatReducers';

// We pass the reducer to that store
const rootReducer = combineReducers({
    UserReducer,
    ChatReducer
});

const store = createStore(rootReducer);

export default store;