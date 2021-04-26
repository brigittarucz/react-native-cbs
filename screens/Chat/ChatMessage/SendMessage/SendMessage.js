import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { View, Image, TextInput, Button } from 'react-native';
import { chatStartStyles } from './styles';
import { useSelector, useDispatch } from "react-redux";
import chatActions from '../../../../store/actions/ChatActions';
import {uuid} from 'uuidv4';
import ChatMessage from '../../../../models/ChatMessage';

const SendMessage = props => {
 
    const dispatch = useDispatch();

    const userFrom = useSelector((state) => state.UserReducer.userSession);
    const [userInput, setUserInput] = useState('');

    var messages = props.messages;

    console.log("Crazy");

    // Component requires intense debugging
    // console.log(messages);
    // console.log(userFrom);
    // console.log(props.userTo);
    // console.log(props.chatroom);

    const textChangeHandler = (event) => {
        setUserInput(event);
    }

    const sendMessageHandler = () => {
        var newMessage = new ChatMessage(uuid(), 
                                         messages.length !== 0 ?
                                         messages[0].chatId : 
                                         props.chatroom.chatId, 
                                         new Date().getTime(), 
                                         userInput, 
                                         userFrom.id, 
                                         props.userTo, 
                                         true)

        console.log(newMessage)
        messages.push(newMessage);
        // Push new message to state
        dispatch(chatActions.setMessages(
            {messages: messages}
        ))

        // Store new chatroom in DB if first message
        console.log(props.chatroom);
        if(messages.length === 1) {
            console.log("Here");
            dispatch(chatActions.createChatroom(props.chatroom));
        }

        // Store new message
        dispatch(chatActions.createMessage(newMessage));

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
