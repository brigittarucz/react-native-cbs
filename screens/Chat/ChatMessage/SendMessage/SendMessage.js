// REACT
import React, { useState, useEffect } from 'react';
// REACT NATIVE
import 'react-native-gesture-handler';
import { View, Image, TextInput, Button } from 'react-native';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import chatActions from '../../../../store/actions/ChatActions';
// NAVIGATION
import { useNavigation } from '@react-navigation/native';
// MODELS
import ChatMessage from '../../../../models/ChatMessage';
// OTHERS
import { chatStartStyles } from './styles';
import { uuid } from 'uuidv4';

const SendMessage = props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const userFrom = useSelector((state) => state.UserReducer.userSession);
    const [userInput, setUserInput] = useState('');

    var messages = props.messages;

    var privateChats = useSelector((state) => state.ChatReducer.privateChats)
    // console.log(messages);

    // Component requires intense debugging
    // console.log(messages);
    // console.log(userFrom);
    // console.log(props.userTo);
    // console.log(props.chatroom);

    const textChangeHandler = (event) => {
        setUserInput(event);
    }

    // Set chatrooms new state use effect

    const sendMessageHandler = () => {
        var newMessage = new ChatMessage(uuid(), 
                                         messages.length !== 0 ?
                                         messages[0].chatId : 
                                         props.chatroom.chatId, 
                                         new Date().getTime(), 
                                         userInput, 
                                         props.userTo, 
                                         userFrom.id, 
                                         true)

        // console.log(newMessage)
        messages.push(newMessage);
        // Push new message to state
        dispatch(chatActions.setMessages(
            {messages: messages}
        ))

        // Store new chatroom in DB if first message
        if(messages.length === 1) {
            var chatroom = props.chatroom;
            chatroom.chatMessages = messages;
            chatroom.lastMessage = userInput;
            chatroom.lastMessageDate = new Date().getTime();

            dispatch(chatActions.createChatroom(chatroom)).then(res => {
                newMessage.chatId = res.name;
                dispatch(chatActions.createMessage(newMessage));
                privateChats.push(chatroom);
                console.log(chatroom);
                dispatch(chatActions.setUpdateChatRoomsPrivate(privateChats));
                navigation.navigate('ChatTabNavigator', {item: privateChats})
            })
        } else {
            // Store new message
            for(var i = 0; i < privateChats.length; i++) {
                if(privateChats[i].id === props.chatroom.id) {
                    privateChats[i].chatMessages = messages;
                    privateChats[i].lastMessage = userInput;
                    privateChats[i].lastMessageDate = newMessage.createdDate;
                    
                    dispatch(chatActions.setUpdateChatRoomsPrivate(privateChats));
                }
            }
            dispatch(chatActions.createMessage(newMessage));
        }

        
        props.addedNew(newMessage);
    }

    useEffect(() => {
        dispatch(chatActions.setMessages(
            {messages: messages})       
    )}, [messages])

    return (
        <View style={chatStartStyles.start}>
                <Image style={chatStartStyles.startImage} source='https://randomuser.me/api/portraits/women/0.jpg' />
                <TextInput onChangeText={(event) => textChangeHandler(event)} style={chatStartStyles.startInput} placeholder="Write message"/>
                <View style={{margin: 10}}>
                    <Button onPress={() => sendMessageHandler()} title="Send"></Button>
                </View>
        </View>
    )
};

export default SendMessage;
