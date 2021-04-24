import { SET_MESSAGES, CREATE_CHATROOM, SET_CHATROOMS } from '../constants/ConstantsActions';

import ChatRoom from '../../models/ChatRoom';
import ChatMessage from '../../models/ChatMessage';

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
        var chatroomsKeys = Object.keys(chatrooms);

        if(!response.ok) {
            throw new Error("Could not retrieve chatrooms")
        } else {
            const response = await fetch(
                'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/messages.json?auth=' + token, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            
            var messages = await response.json();
            var messagesKeys = Object.keys(messages);

            var messagesArr = []

            for (var key of messagesKeys) {
                var message = new ChatMessage(key,
                                              messages[key].chatId,
                                              messages[key].createdDate,
                                              messages[key].message,
                                              messages[key].userIds.id_from,
                                              messages[key].userIds.id_to,
                                              messages[key].read)
                messagesArr.push(message);
            }

            var chatroomsPublicArr = [];
            var chatroomsPrivateArr = [];

            for (var key of chatroomsKeys) {
                var chatroom = new ChatRoom(key,
                                            chatrooms[key].createdDate,
                                            chatrooms[key].names.name_1,
                                            chatrooms[key].names.name_2,
                                            chatrooms[key].image,
                                            messagesArr,
                                            chatrooms[key].isPublicChat)
                                            
                if(chatrooms[key].isPublicChat === true) {
                    chatroomsPublicArr.push(chatroom)
                } else {
                    chatroomsPrivateArr.push(chatroom)
                }
            }

            if(!response.ok) {
                throw new Error("Could not retrieve messages")
            } else {
                dispatch({type: SET_CHATROOMS, payload: {publicChats: chatroomsPublicArr,
                                                         privateChats: chatroomsPrivateArr } });
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