import { StyleSheet } from 'react-native';

const chatFromStyles = StyleSheet.create({
    from: {
        display: 'flex'
    },
    fromContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'baseline'
    },
    fromMessage: {
        width: '70%',
        display: 'inline-block',
        fontSize: 18,
        backgroundColor: '#EEE',
        padding: 15,
        borderRadius: 10
    },
    fromImage: {
        width: 40, 
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#eee',
        margin: 5
    },
    fromContainerText: {
        display: 'flex',
        flexDirection: 'row'
    },
    fromUser: {
        marginLeft: 55,
        paddingTop: 10,
        fontSize: 16,
        color: '#AAA',
        display: 'inline-block'
    },
    fromDate: {
        marginLeft: 15,
        paddingTop: 10,
        fontSize: 16,
        color: '#AAA',
        display: 'inline-block'
    }
});

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

const chatStartStyles = StyleSheet.create({
    start: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        height: 80, 
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    startImage: {
        width: 40, 
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#eee',
        margin: 20
    },
    startInput: {
        fontSize: 18,
        backgroundColor: '#eee',
        width: '75%',
        padding: 15,
        borderRadius: 10
    }
})

export {chatFromStyles, chatToStyles, chatStartStyles};