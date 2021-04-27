import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { chatToStyles } from './styles';

const ChatTo = (props) => {
    return (
        <View style={chatToStyles.to}>
            <Text style={chatToStyles.toMessage} >{props.data.message}</Text>
            <Text style={chatToStyles.toDate} >10:44</Text>
        </View>
    )
}

export default ChatTo;