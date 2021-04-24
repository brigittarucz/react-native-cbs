import React from 'react';

import 'react-native-gesture-handler';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from "react-redux";

import ChatTo from '../ChatIndividual/ChatTo/ChatTo';
import ChatFrom from '../ChatIndividual/ChatFrom/ChatFrom';
import { useState } from 'react';

const ChatMessage = props => {
    var chatroom = props.route.params.item;
    var messages = chatroom.chatMessages;

    const [flatlist, setFlatlist] = useState(<Text>Loading</Text>)

    const userFrom = useSelector((state) => state.UserReducer.userSession);

    // DB call for user
    if(!chatroom.isPublicChat) {
        const userToId = chatroom.chatMessages[0].userFrom === userFrom.id ?
                       chatroom.chatMessages[0].userTo : 
                       chatroom.chatMessages[0].userFrom;

        const userTo = getUser(userToId, useSelector((state) => state.UserReducer.idToken))
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

                            setFlatlist(flatlistGenerated);
                        }).catch(error => {
                            throw new Error("Cannot get individual user")
                        })
    }

    // console.log(userFrom);
    // console.log(userTo);
    // console.log(chatroom);

    // if(userFrom.id !== undefined && userTo.id !== undefined) {
    //     console.log(messages);
    //     var flatlist = (
    //         <FlatList 
    //             data={messages}
    //             keyExtractor={item => item.id.toString()}
    //             renderItem={itemData => {
    //                 if (itemData.item.userTo !== userTo.id) {
    //                     return <ChatTo data={itemData.item} key={itemData.index.toString()}/>
    //                 } else {
    //                     return <ChatFrom data={itemData.item} key={itemData.index.toString()}/>
    //                 }
    //             }}
    //         />
    //     )
    // } else {
    //     var flatlist = (<Text>Loading</Text>)
    // }
    

    return (
        <View>
            {flatlist}
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