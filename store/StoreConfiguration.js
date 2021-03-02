import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/UserReducers';

// We pass the reducer to that store
const rootReducer = combineReducers({
    UserReducer
});

const store = createStore(rootReducer);

export default store;