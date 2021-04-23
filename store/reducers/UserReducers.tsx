import { SET_USER_SESSION, LOG_USER_OUT, LOG_USER_IN, SAVE_USER, SIGN_USER_UP, CHANGE_PASSWORD } from '../constants/ConstantsActions';
import User from '../../models/PrivateUser';

// Class vs interfaces - interfaces cannot be instantiated
export interface UserState {
    userSession: User | {} ,
    isLoggedIn: boolean,
    error: boolean,
    idToken: string
}

export interface Action {
    type: string,
    payload: any | undefined
}

const initialState: UserState = {
    userSession: {},
    isLoggedIn: false,
    error: false,
    idToken: ''
}

// DO NOT set values in reducers, only return a 
// new state object with ever changed values !!
// With the spread operator we create a shallow copy
// We override the shalow copy with a new value
// This is important so that React can rerender 
const UserReducer = (state: UserState = initialState, action: Action) => {
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
        case LOG_USER_IN: {
            return {
                ...state,
                userSession: action.payload.user,
                isLoggedIn: true,
                idToken: action.payload.idToken
            }
        }
        case SAVE_USER:
            return {
                ...state,
                userSession: action.payload.userSession,
                isLoggedIn: true
            }
        case SIGN_USER_UP: {
            return {
                ...state,
                userSession: new User(action.payload.localId, action.payload.name , action.payload.email, action.payload.password, '', '', '', ''),
                isLoggedIn: true,
                idToken: action.payload.idToken
            }
        }
        case CHANGE_PASSWORD: {
            // console.log(action.payload)
            return {
                ...state,
                userSession: action.payload.userSession,
                isLoggedIn: true
            }
        }
        // case IS_LOADING: {
        //     return {
        //         ...state,
        //         isLoading: action.payload
        //     }
        // }
        default:
            return state;
    }
}

export default UserReducer;