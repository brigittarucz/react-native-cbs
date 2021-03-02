import { SET_USER_SESSION, LOG_USER_OUT } from '../constants/ConstantsActions';

const setUserSession = () => {
    return {
        type: SET_USER_SESSION,
        payload: userSession
    }
}

const logUserOut = () => {
    return {
        type: LOG_USER_OUT
    }
}

export default {
    setUserSession,
    logUserOut
}