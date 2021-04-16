import { SET_MESSAGES, CREATE_CHATROOM } from '../constants/ConstantsActions';

const ChatReducer = (state = {messages: {}}, action) => {
    switch(action.type) {
        case SET_MESSAGES:
            return {
                messages: action.payload.messages
            }
        case CREATE_CHATROOM:
            return {
                
            }
        default:
            return state
    }
}

export default ChatReducer;