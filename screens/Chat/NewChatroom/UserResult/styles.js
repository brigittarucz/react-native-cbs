import { StyleSheet, Platform } from 'react-native';

const chatSearchStyles = StyleSheet.create({
    start: {
        marginTop: 5,
        marginBottom: 5,
        height: 80, 
        width: '100%',
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
    text: {
        fontWeight: 600,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'
    }
})

export { chatSearchStyles };