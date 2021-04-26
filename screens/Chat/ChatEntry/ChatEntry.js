import React from 'react';
import 'react-native-gesture-handler';

import { View, TouchableOpacity, FlatList } from 'react-native';

import ChatRoom from '../../../components/ChatRoom/ChatRoom';
import { useNavigation } from '@react-navigation/native';

const ChatEntry = props => {
    // console.log(props.chatrooms);
    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={props.chatrooms}
                keyExtractor={item => item.id.toString()}
                renderItem={itemData => (
                    <TouchableOpacity onPress={() => 
                        navigation.navigate('ChatMessage', {item: itemData.item, messages: props.messages})} >
                            <ChatRoom item={itemData.item}/>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

export default ChatEntry;