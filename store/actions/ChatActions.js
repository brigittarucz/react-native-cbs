import { SET_MESSAGES } from '../constants/ConstantsActions';

const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        payload: messages
    }
}

export default {
    setMessages
}