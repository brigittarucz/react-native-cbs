// Massive bug fixer
import 'react-native-gesture-handler';
import React from 'react';
import { View, FlatList, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import { USERS } from '../../../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import chatActions from '../../../store/actions/ChatActions';
import { useEffect, useState } from 'react';
import ChatMessage  from '../../../models/ChatMessage';
import getChatRooms from '../utils';

import ChatTo from './ChatTo/ChatTo';
import ChatFrom from './ChatFrom/ChatFrom';

const loggedInUserPrivate = 4;

const ChatIndividual = (props) => {
    const {navigation, route} = props;
    // setCurrentChatrooms(getChatRooms(props.chatrooms, loggedInUserPublic, loggedInUserPrivate));
    console.log(props);

    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('');
    const [triggerRerender, setTriggerRerender] = useState(false);

    useEffect(() => {
        dispatch(chatActions.setMessages(
            {messages: route.params != undefined ? 
                route.params.item.chatMessages : 
                []
            })       
    )}, [props])
    
    var chatMessages = useSelector(state => state.ChatReducer.messages);
         
    const sendMessageHandler = () => {
        var newMessage = new ChatMessage(chatMessages[chatMessages.length-1].id+1, 1, new Date(), userInput, USERS[4], USERS[3], true)
        chatMessages.push(newMessage);
        // Push new message to state
        dispatch(chatActions.setMessages(
            {messages: chatMessages}
        ))
        // Hackish way to trigger rerender of the list
        setTriggerRerender(!triggerRerender);
    }
    
    const textChangeHandler = (event) => {
        setUserInput(event)
    }

    const deleteMessageHandler = (id) => {
        chatMessages = chatMessages.filter(message => message.id != (id+1));
        dispatch(chatActions.setMessages(
            {messages: chatMessages}
        ))

        setTriggerRerender(!triggerRerender)
    }

    return (
        <View style={{height: '100%', width: '100%'}}>
            <FlatList
                data={chatMessages}
                extraData={triggerRerender}
                renderItem={itemData => {
                    // console.log(itemData)
                    if (itemData.item.userFrom.id == loggedInUserPrivate) {
                        return <ChatTo data={itemData.item} key={itemData.index.toString()}/>
                    } else {
                        return  <TouchableOpacity key={itemData.index.toString()} onPress={() => deleteMessageHandler(itemData.index)}>
                                    <ChatFrom data={itemData.item}/>
                                </TouchableOpacity>
                    }
                }}   
                keyExtractor={item => item.id.toString()} /> 
            <View style={chatStartStyles.start}>
                <Image style={chatStartStyles.startImage} source='https://randomuser.me/api/portraits/women/0.jpg' />
                <TextInput onChangeText={(event) => textChangeHandler(event)} style={chatStartStyles.startInput} placeholder="Write message"/>
                <View style={{margin: 10}}>
                    <Button onPress={() => sendMessageHandler()} title="Send"></Button>
                </View>
            </View>
        </View>
    );
}

export default ChatIndividual;

