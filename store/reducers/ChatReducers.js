import { SEND_MESSAGE, DELETE_MESSAGE, SET_MESSAGES } from '../constants/ConstantsActions';

const ChatReducer = (state = {messages: {}}, action) => {
    switch(action.type) {
        case SET_MESSAGES:
            return {
                messages: action.payload.messages
            }
        case SEND_MESSAGE:
            return {
                messages: action.payload.message
            }
        default:
            return state
    }
}

export default ChatReducer;