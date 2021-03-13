import { SEND_MESSAGE, DELETE_MESSAGE } from '../constants/ConstantsActions';

const ChatReducer = (state = {messages: {}}, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: action.payload.messages
            }
    }
}