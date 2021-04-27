// REACT
import React from 'react';
// REACT NATIVE
import 'react-native-gesture-handler';
import { View, TouchableOpacity, FlatList } from 'react-native';
// NAVIGATION
import { useNavigation } from '@react-navigation/native';
// COMPONENTS
import ChatRoom from './ChatRoom/ChatRoom';

const ChatEntry = props => {
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