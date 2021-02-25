import React from 'React';
import { View, Text, StyleSheet, Image } from 'react-native';
import { format, differenceInSeconds } from 'date-fns'


const ChatRoom = props => {
    // 86400 sec in day
    console.log(differenceInSeconds(new Date(), props.item.lastMessageDate));

    return (
        <View style={styles.container}>
            <View style={styles.containerMessage}>
                <Image style={styles.messageImage} source={props.item.image} />
                <View>
                    <Text style={styles.messageSender}>{props.item.name}</Text>
                    <Text style={styles.messageLast}>{props.item.lastMessage}</Text>
                </View>
            </View>
            <Text style={styles.messageDate}>
                {differenceInSeconds(new Date(), props.item.lastMessageDate) < 86400 ?
                    format(props.item.lastMessageDate, 'p') :
                    format(props.item.lastMessageDate, 'd') + ' ' + format(props.item.lastMessageDate, 'MMM')}</Text>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        margin: 10
    },
    containerMessage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: "78%",
        overflow: "hidden"
    },
    messageImage: {
        height: 55,
        width: 55,
        borderRadius: 55,
        marginRight: 10
    },
    messageLast: {
        marginLeft: 10,
        fontSize: 18,
    },
    messageSender: {
        fontSize: 20,
        fontWeight: 600,
        marginLeft: 10,
        marginBottom: 5
    },
    messageDate: {
        fontSize: 18
    }
});

export default ChatRoom;