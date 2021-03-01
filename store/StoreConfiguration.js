import { createStore, combineReducers } from 'redux';
import CounterReducer from './reducers/CounterReducer';

// We pass the reducer to that store
// The combineReducer function combines all the different 
// reducers into one and forms the global state.
const rootReducer = combineReducers({
    count: CounterReducer
});

const store = createStore(rootReducer);

export default store;