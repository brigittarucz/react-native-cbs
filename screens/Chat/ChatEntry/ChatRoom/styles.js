import { StyleSheet } from 'react-native';

const chatRoomStyles = StyleSheet.create({
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

export {chatRoomStyles};