import 'react-native-gesture-handler';
import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ChatRoom from '../../../../models/ChatRoom';
import { uuid } from 'uuidv4';

const UserResult = (props) => {
    const navigation = useNavigation();
    const chats = useSelector((state) => state.ChatReducer.privateChats);
    const userSessionName = useSelector((state) => state.UserReducer.userSession.name);

    const handleSetChatroom = () => {
        console.log(props.item);

        // Check if the users have previously chatted
        var chatroom = false;

        chats.forEach(chat => {
            chat.chatMessages.forEach(message => {
                console.log(message);
                console.log(props.id);
                if(message.userFrom === props.id || message.userTo === props.id) {
                    
                    chatroom = chat;
                    console.log(chatroom);
                }
            })
        })

        if(chatroom !== false) {
            // If yes import chat room and navigate
            console.log(chatroom);
            chatroom = new ChatRoom(chatroom.id,
                                    chatroom.createdDate,
                                    chatroom.name,
                                    chatroom.name_2,
                                    chatroom.image,
                                    chatroom.chatMessages,
                                    chatroom.isPublicChat)
            
            navigation.navigate('ChatMessage', {item: chatroom});
        
        } else {
            // If not create new empty room and navigate
            chatroom = new ChatRoom(uuid(),
                                    new Date().getTime(),
                                    props.name,
                                    userSessionName,
                                    "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
                                    [],
                                    false);

            navigation.navigate('ChatMessage', {item: chatroom, userTo: props.id, messages: []});
        }
        
    
        // navigation.navigate('ChatMessage', {item: props.item})} >

    }

    return (
        <View>
            <TouchableOpacity onPress={() => handleSetChatroom()}>
                <Text> {props.name} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserResult;