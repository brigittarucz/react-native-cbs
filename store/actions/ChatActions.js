import ChatRoom from '../../models/ChatRoom';
import { SET_MESSAGES, CREATE_CHATROOM, SET_CHATROOMS } from '../constants/ConstantsActions';

const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        payload: messages
    }
}

const setChatRooms = (token) => {

    return async dispatch => {
        const response = await fetch(
            'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )    
        
        var chatrooms = await response.json();
    
        if(!response.ok) {
            throw new Error("Could not retrieve chatrooms")
        } else {
            const response = await fetch(
                'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            
            var messages = await response.json();
    
            if(!response.ok) {
                throw new Error("Could not retrieve messages")
            } else {
                console.log(chatrooms);
                console.log(messages);
    
                dispatch({type: SET_CHATROOMS, payload: chatrooms });
            }
        }
    }
}

const createChatroom = (chatroomName) => {
    return async (dispatch, getState) => {

        // let chatroom = new ChatRoom('', new Date(), [chatroomName], '', [], false, [], [])

        const token = getState().UserReducer.idToken;
        console.log(token);

        const response = await fetch(
            'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: chatroomName,
                    createdDate: new Date(),
                    chatMessages: []
                })
            }
        )

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {
            // chatroom.id = data.name;
            dispatch({type: CREATE_CHATROOM, payload: data.name });
        }
    }
}

export default {
    setMessages,
    createChatroom,
    setChatRooms
}