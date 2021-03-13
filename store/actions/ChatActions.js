import { SEND_MESSAGE, DELETE_MESSAGE } from '../constants/ConstantsActions';

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
    sendMessage,
    deleteMessage
}