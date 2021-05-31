// REACT
import React from "react";
// REACT NATIVE
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// REDUX
import { useSelector } from 'react-redux';
// NAVIGATION
import { useNavigation } from '@react-navigation/native';
// COMPONENTS
import ChatRoom from '../../../../models/ChatRoom.tsx';
// OTHERS
import { uuid } from 'uuidv4';
import { chatSearchStyles } from './styles';

import { default as ChatRoomInterface } from '../../../../models/ChatRoom'; 
import { default as ChatMessageInterface } from '../../../../models/ChatMessage'; 

interface UserResultProps {
    id: string,
    name: string
}

const UserResult: React.FC<UserResultProps> = (props: UserResultProps) => {

    const navigation = useNavigation();
    const chats = useSelector((state: any) => state.ChatReducer.privateChats);
    const userSessionName = useSelector((state: any) => state.UserReducer.userSession.name);

    const handleSetChatroom = () => {
        // console.log(props.item);

        // Check if the users have previously chatted
        var chatroom: boolean | ChatRoomInterface = false;

        chats.forEach((chat: ChatRoomInterface) => {
            chat.chatMessages.forEach((message: any)  => {

                if(message.userFrom === props.id || message.userTo === props.id) {
                    
                    chatroom = chat;
                    console.log(chatroom);
                }
            })
        })

        if(chatroom !== false && chatroom !== null) {
            // If yes import chat room and navigate
            // console.log(chatroom);
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
                <View>
                    <View style={chatSearchStyles.start}>
                        <Image style={chatSearchStyles.startImage} source='https://randomuser.me/api/portraits/women/0.jpg' />
                        <Text style={chatSearchStyles.text}>{props.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default UserResult;