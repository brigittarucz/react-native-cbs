import { SET_MESSAGES, CREATE_CHATROOM, SET_CHATROOMS, CREATE_MESSAGE } from '../constants/ConstantsActions';

import ChatRoom from '../../models/ChatRoom';
import ChatMessage from '../../models/ChatMessage';

const setMessages = (messages) => {
    console.log(messages);
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

const createChatroom = (chatroom) => {
    return async (dispatch, getState) => {

        const token = getState().UserReducer.idToken;

        const response = await fetch(
            'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/.json?auth=' + token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: chatroom.name,
                    createdDate: chatroom.createdDate,
                    image: chatroom.image,
                    isPublicChat: chatroom.isPublicChat,
                    names: {
                        name_1: chatroom.name,
                        name_2: chatroom.name_2
                    }
                })
            }
        )

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            throw new Error("Cannot create chatroom")
        } else {
            dispatch({type: CREATE_CHATROOM, payload: data });
        }
    }
}

const createMessage = (message) => {
    return async (dispatch, getState) => {

        const token = getState().UserReducer.idToken;

        const response = await fetch(
            'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/messages/.json?auth=' + token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chatId: message.chatId,
                    createdDate: message.createdDate,
                    message: message.message,
                    userIds: {
                        id_from: message.userFrom,
                        id_to: message.userTo
                    },
                    isPublicChat: false
                })
            }
        )

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            throw new Error("Cannot create message")
        } else {
            dispatch({type: CREATE_MESSAGE, payload: data });
        }
    }
}

export default {
    setMessages,
    createChatroom,
    setChatRooms,
    createMessage,
}