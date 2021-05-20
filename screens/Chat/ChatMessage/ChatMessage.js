// REACT
import React, { useState, useEffect } from 'react';
// REACT NATIVE
import 'react-native-gesture-handler';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import chatActions from '../../../store/actions/ChatActions';
// COMPONENTS
import SendMessage from './SendMessage/SendMessage';
import ChatTo from './ChatTo/ChatTo.tsx';
import ChatFrom from './ChatFrom/ChatFrom.tsx';
// OTHERS
import { getUser } from '../utils';

const ChatMessage = props => {
    const dispatch = useDispatch();

    // console.log(props.route.params);

    var chatroom = props.route.params.item;
    var messages = chatroom.chatMessages;
    // var messages = props.route.params.messages;
    const chatrooms = useSelector((state) => state.ChatReducer.privateChats);
    const [didComponentInitialize, setDidComponentInitialize] = useState(false);
    const [flatlist, setFlatlist] = useState(<Text>Loading</Text>)
    const [sendAMessage, setSendAMessage] = useState(<SendMessage messages={props.route.params.item.chatMessages} chatroom={props.route.params.item}/>)
    const userFrom = useSelector((state) => state.UserReducer.userSession);
    const idToken = useSelector((state) => state.UserReducer.idToken);
    const [newMessages, setNewMessages] = useState([]);
    const [triggerRerender, setTriggerRerender] = useState(false);
    // Update component by updating messages
    useEffect(() => {
        dispatch(chatActions.setMessages(
            {messages: messages})       
    )}, [messages])

    const newAddedMessage = (newMessage) => {
        newMessages.push(newMessage);
        setNewMessages(newMessages)
        // console.log(newMessages);
        // console.log("Add");
        setTriggerRerender(!triggerRerender);
    }

    if(!didComponentInitialize) {
        if(!chatroom.isPublicChat) {
            var userToId =  (chatroom.chatMessages.length === 0) ?
                            props.route.params.userTo :
                            (chatroom.chatMessages[0].userFrom === userFrom.id) ?
                            chatroom.chatMessages[0].userTo : 
                            chatroom.chatMessages[0].userFrom;

            getUser(userToId, idToken)
            .then(userTo => {
                
                // User from DB to add image 
                // console.log(chatroom.chatMessages);
                var flatlistGenerated = (
                    <FlatList 
                        data={messages}
                        keyExtractor={item => item.id.toString()}
                        renderItem={itemData => {
                            if (itemData.item.userTo !== userToId) {
                                return  <TouchableOpacity key={itemData.index.toString()} onPress={() => deleteMessageHandler(itemData.index)}> 
                                            <ChatTo data={itemData.item} />
                                        </TouchableOpacity>
                            } else {
                                return  <TouchableOpacity ey={itemData.index.toString()} onPress={() => deleteMessageHandler(itemData.index)}>
                                            <ChatFrom data={itemData.item} />
                                        </TouchableOpacity>
                            }
                        }}
                    />
                )

                var sendMessage = (
                    <SendMessage addedNew={newAddedMessage} messages={props.route.params.item.chatMessages} userTo={props.route.params.userTo} chatroom={props.route.params.item}/>
                )

                setSendAMessage(sendMessage);
                setFlatlist(flatlistGenerated);
                }).catch(error => {
                    throw new Error("Cannot get individual user")
            })

        } else if (chatroom.isPublicChat) {
            
            var messagesLength = chatroom.chatMessages.length;
            
            setTimeout(() => {
                if(messagesLength) {
                    var flatlistGenerated = (
                        <FlatList 
                            data={messages}
                            keyExtractor={item => item.id.toString()}
                            renderItem={itemData => (
                                <ChatFrom data={itemData.item} key={itemData.index.toString()}/>
                            )}
                        />
                    )
                } else {
                    var flatlistGenerated = (
                        <Text>No messages yet</Text>
                    )
        
                    setFlatlist(flatlistGenerated);
                }
        
                setFlatlist(flatlistGenerated);
            }, 1000)
            
        }
    setDidComponentInitialize(true);
    }
        

    const deleteMessageHandler = (id) => {
        messages.splice(id,1);
        dispatch(chatActions.setMessages(
            {messages: messages}
        ))

        chatrooms.forEach(chat => {
            if(chat.id === chatroom.id) {
                chat.chatMessages = messages;
            }
        })

        dispatch(chatActions.setUpdateChatRoomsPrivate(chatrooms));

        setDidComponentInitialize(false)
    }

    return (
        <View style={{height: '100%', width: '100%'}}>
            {flatlist}
            <FlatList
                data={newMessages}
                extraData={triggerRerender}
                renderItem={itemData => {
                    return <Text>You have received a new message!</Text>
                    // return <ChatTo data={itemData.item} key={itemData.index.toString()}/>
                }}   
                keyExtractor={item => item.id.toString()} /> 
            {sendAMessage}
        </View>
    )
}

export default ChatMessage