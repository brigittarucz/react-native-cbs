import { SET_MESSAGES, CREATE_CHATROOM, SET_CHATROOMS } from '../constants/ConstantsActions';

const ChatReducer = (state = {messages: {}, publicChats: [], privateChats: []}, action) => {
    switch(action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload.messages
            }
        case CREATE_CHATROOM:
            return {
                
            }
        case SET_CHATROOMS: {
            return {
                ...state,
                publicChats: action.payload.publicChats,
                privateChats: action.payload.privateChats
            }
        }
        default:
            return state
    }
}

export default ChatReducer;