import { StyleSheet } from 'react-native';

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

export { chatStartStyles };