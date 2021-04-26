import React from 'react';

import 'react-native-gesture-handler';
import { View, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import ChatTo from '../ChatIndividual/ChatTo/ChatTo';
import ChatFrom from '../ChatIndividual/ChatFrom/ChatFrom';
import { useState } from 'react';

import chatActions from '../../../store/actions/ChatActions';
import SendMessage from './SendMessage/SendMessage';

const ChatMessage = props => {
    const dispatch = useDispatch();

    var chatroom = props.route.params.item;
    var messages = chatroom.chatMessages;

    const [didComponentInitialize, setDidComponentInitialize] = useState(false);
    const [flatlist, setFlatlist] = useState(<Text>Loading</Text>)
    const [sendAMessage, setSendAMessage] = useState(<SendMessage messages={props.route.params.item.chatMessages} chatroom={props.route.params.item}/>)
    const userFrom = useSelector((state) => state.UserReducer.userSession);
    const idToken = useSelector((state) => state.UserReducer.idToken);
   
    // Update component by updating chatrooms

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

                var flatlistGenerated = (
                    <FlatList 
                        data={messages}
                        keyExtractor={item => item.id.toString()}
                        renderItem={itemData => {
                            if (itemData.item.userTo !== userToId) {
                                return <ChatTo data={itemData.item} key={itemData.index.toString()}/>
                            } else {
                                return <ChatFrom data={itemData.item} key={itemData.index.toString()}/>
                            }
                        }}
                    />
                )

                var sendMessage = (
                    <SendMessage messages={props.route.params.item.chatMessages} userTo={props.route.params.userTo} chatroom={props.route.params.item}/>
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
        

    return (
        <View style={{height: '100%', width: '100%'}}>
            {flatlist}
            {sendAMessage}
        </View>
    )
}

const getUser = async (id, token) => {
    const response = await fetch(
        "https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/users/" +
            id +
            ".json?auth=" +
            token,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Could not get user");
    } else {
        var user = await response.json();
        return user;
    }
};

export default ChatMessage