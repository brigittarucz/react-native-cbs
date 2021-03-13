import { SEND_MESSAGE, DELETE_MESSAGE, SET_MESSAGES } from '../constants/ConstantsActions';

const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        payload: messages
    }
}

const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}

const deleteMessage = (message) => {
    return {
        type: DELETE_MESSAGE,
        payload: message
    }
}

export default {
    setMessages,
    sendMessage,
    deleteMessage
}