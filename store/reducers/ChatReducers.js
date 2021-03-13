import { SET_MESSAGES } from '../constants/ConstantsActions';

const ChatReducer = (state = {messages: {}}, action) => {
    switch(action.type) {
        case SET_MESSAGES:
            return {
                messages: action.payload.messages
            }
        default:
            return state
    }
}

export default ChatReducer;