// REACT
import React from 'react';
// REACT NATIVE
import 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
// OTHERS
import { chatFromStyles } from './styles';

import { default as ChatMessageInterface } from '../../../../models/ChatMessage';

interface ChatFromProps {
    data: ChatMessageInterface
}

const ChatFrom: React.FC<ChatFromProps> = (props): JSX.Element => {
    return (
            <View style={chatFromStyles.from}>
                    <View style={chatFromStyles.fromContainer}>
                        <Image style={chatFromStyles.fromImage} source='https://randomuser.me/api/portraits/women/0.jpg'/>
                        <Text style={chatFromStyles.fromMessage}>{props.data.message}</Text>
                    </View>
                    <View style={chatFromStyles.fromContainerText}>
                        <Text style={chatFromStyles.fromUser}>From Alexa Rollins</Text>
                        <Text style={chatFromStyles.fromDate}>10:40</Text>
                    </View> 
            </View>
    )
}

export default ChatFrom;