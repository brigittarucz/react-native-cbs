import React from 'react';

import 'react-native-gesture-handler';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from "react-redux";

import ChatTo from '../ChatIndividual/ChatTo/ChatTo';
import ChatFrom from '../ChatIndividual/ChatFrom/ChatFrom';
import { useState } from 'react';

import SendMessage from './SendMessage/SendMessage';

const ChatMessage = props => {

    var chatroom = props.route.params.item;
    var messages = chatroom.chatMessages;

    const [flatlist, setFlatlist] = useState(<Text>Loading</Text>)
    const [sendAMessage, setSendAMessage] = useState(<SendMessage chatroom={props.route.params.item}/>)
    const userFrom = useSelector((state) => state.UserReducer.userSession);

    if(!chatroom.isPublicChat) {
        
        var userToId =  (chatroom.chatMessages.length === 0) ?
                        props.userTo :
                        (chatroom.chatMessages[0].userFrom === userFrom.id) ?
                        chatroom.chatMessages[0].userTo : 
                        chatroom.chatMessages[0].userFrom;
                
        getUser(userToId, useSelector((state) => state.UserReducer.idToken))
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
                <SendMessage userTo={props.userTo} chatroom={props.route.params.item}/>
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