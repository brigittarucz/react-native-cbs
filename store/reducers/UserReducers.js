import { SET_USER_SESSION, LOG_USER_OUT, LOG_USER_IN } from '../constants/ConstantsActions';

// DO NOT set values in reducers, only return a 
// new state object with ever changed values !!
// With the spread operator we create a shallow copy
// We override the shalow copy with a new value
// This is important so that React can rerender 
const UserReducer = (state = {userSession: {}, isLoggedIn: false}, action) => {
    switch(action.type) {
        case SET_USER_SESSION:
            return {
                ...state,               
                userSession: action.payload.userSession,
                isLoggedIn: true
            }
        case LOG_USER_OUT:
            return {
                ...state,
                userSession: {},
                isLoggedIn: false
            }
        case LOG_USER_IN:
            return {
                ...state,
                userSession: action.payload.user,
                isLoggedIn: true
            }
        default:
            return state;
    }
}

export default UserReducer;