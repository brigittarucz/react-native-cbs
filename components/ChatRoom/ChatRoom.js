import React from 'React';
import { View, Text, Image } from 'react-native';
import { format, differenceInSeconds } from 'date-fns'
import { chatRoomStyles } from './styles';

const ChatRoom = props => {
    // 86400 sec in day
    // console.log(differenceInSeconds(new Date(), props.item.lastMessageDate));

    return (
        <View style={chatRoomStyles.container}>
            <View style={chatRoomStyles.containerMessage}>
                <Image style={chatRoomStyles.messageImage} source={props.item.image} />
                <View>
                    <Text style={chatRoomStyles.messageSender}>{props.item.name}</Text>
                    <Text style={chatRoomStyles.messageLast}>{props.item.lastMessage}</Text>
                </View>
            </View>
            <Text style={chatRoomStyles.messageDate}>
                {differenceInSeconds(new Date(), props.item.lastMessageDate) < 86400 ?
                    format(props.item.lastMessageDate, 'p') :
                    format(props.item.lastMessageDate, 'd') + ' ' + format(props.item.lastMessageDate, 'MMM')}</Text>  
        </View>
    );
}


export default ChatRoom;