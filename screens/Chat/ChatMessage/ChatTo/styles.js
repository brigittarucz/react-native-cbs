import { StyleSheet } from 'react-native';

const chatToStyles = StyleSheet.create({
    to: {
        width: "75%",
        marginLeft: "25%"
    },
    toMessage: {
        backgroundColor: "#5050A5",
        borderRadius: 10,
        padding: 15,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 18,
        color: "white"
    },
    toDate: {
        textAlign: 'right',
        color: '#aaa',
        marginRight: 10,
        fontSize: 16
    }
})

export { chatToStyles };