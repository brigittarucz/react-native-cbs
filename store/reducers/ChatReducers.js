import { SET_MESSAGES, 
         CREATE_CHATROOM, 
         SET_CHATROOMS, 
         CREATE_MESSAGE,
         SET_UPDATE_CHATROOMS_PRIVATE } from '../constants/ConstantsActions';

const ChatReducer = (state = {messages: [], publicChats: [], privateChats: []}, action) => {
    switch(action.type) {
        case SET_MESSAGES: {
            return {
                ...state,
                messages: action.payload.messages
            }
        }
        case CREATE_CHATROOM:
            return {
                ...state,
            }
        case SET_CHATROOMS: {
            return {
                ...state,
                publicChats: action.payload.publicChats,
                privateChats: action.payload.privateChats
            }
        }
        case CREATE_MESSAGE:
            return {
                ...state,
            }
        case SET_UPDATE_CHATROOMS_PRIVATE: {
        // console.log(action.payload);
            return {
                ...state,
                privateChats: action.payload
            }
        }
        default:
            return state
    }
}

export default ChatReducer;