import { SET_MESSAGES, CREATE_CHATROOM, SET_CHATROOMS } from '../constants/ConstantsActions';

const ChatReducer = (state = {messages: {}}, action) => {
    switch(action.type) {
        case SET_MESSAGES:
            return {
                messages: action.payload.messages
            }
        case CREATE_CHATROOM:
            return {
                
            }
        case SET_CHATROOMS: {
            console.log(action.payload);
            return {

            }
        }
        default:
            return state
    }
}

export default ChatReducer;