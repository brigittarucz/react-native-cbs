import React from 'react';

import 'react-native-gesture-handler';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from "react-redux";
import { USERS } from '../../../data/dummy-data';
import ChatTo from '../ChatIndividual/ChatTo/ChatTo';
import ChatFrom from '../ChatIndividual/ChatFrom/ChatFrom';

const ChatMessage = props => {
    var chatroom = props.route.params.item;
    var messages = chatroom.chatMessages;

    const userFrom = useSelector((state) => state.UserReducer.userSession);

    // DB call for user
    const userTo = USERS[(userFrom.id == messages[0].userFrom ? messages[0].userTo : messages[0].userFrom) - 1];

    if(userFrom.id !== undefined && userTo.id !== undefined) {
        console.log(messages);
        var flatlist = (
            <FlatList 
                data={messages}
                keyExtractor={item => item.id.toString()}
                renderItem={itemData => {
                    if (itemData.item.userTo !== userTo.id) {
                        return <ChatTo data={itemData.item} key={itemData.index.toString()}/>
                    } else {
                        return <ChatFrom data={itemData.item} key={itemData.index.toString()}/>
                    }
                }}
            />
        )
    } else {
        var flatlist = (<Text>Loading</Text>)
    }

    return (
        <View>
            {flatlist}
        </View>
    )
}

export default ChatMessage