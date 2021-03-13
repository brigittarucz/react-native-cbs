import React from 'react';
import { View, FlatList, Text, Image, TextInput, Button } from 'react-native';
import { chatFromStyles, chatToStyles, chatStartStyles } from './styles';
import { USERS, CHATMESSAGES } from '../../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import chatActions from '../../store/actions/ChatActions';
import { useEffect, useState } from 'react';
import ChatMessage  from '../../models/ChatMessage';

const loggedInUserPrivate = 4;

const ChatIndividual = (props) => {
    const {navigation, route} = props;

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
        var newMessage = new ChatMessage(chatMessages.length, 1, new Date(), userInput, USERS[4], USERS[3], true)
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
    
    const deleteMessageHandler = (event)

    return (
        <View style={{height: '100%', width: '100%'}}>
            <FlatList
                data={chatMessages}
                extraData={triggerRerender}
                renderItem={itemData => {
                    console.log(itemData)
                    if (itemData.item.userFrom.id == loggedInUserPrivate) {
                        return <ChatTo />
                    } else {
                        return <ChatFrom />
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

const ChatTo = (props) => {
    return (
        <View style={chatToStyles.to}>
            <Text style={chatToStyles.toMessage} >Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
            <Text style={chatToStyles.toDate} >10:44</Text>
        </View>
    )
}

const ChatFrom = (props) => {
    return (
        <View style={chatFromStyles.from} onPress={() => deleteMessageHandler()}>
                <View style={chatFromStyles.fromContainer}>
                    <Image style={chatFromStyles.fromImage} source='https://randomuser.me/api/portraits/women/0.jpg'/>
                    <Text style={chatFromStyles.fromMessage}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Text>
                </View>
                <View style={chatFromStyles.fromContainerText}>
                    <Text style={chatFromStyles.fromUser}>From Alexa Rollins</Text>
                    <Text style={chatFromStyles.fromDate}>10:40</Text>
                </View> 
        </View>
    )
}

export default ChatIndividual;

