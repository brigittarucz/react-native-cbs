import {  StyleSheet, Platform } from 'react-native';

const profileStyles = StyleSheet.create({
    notificationContainer: {
        backgroundColor: 'white',
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        padding: 10,
        borderRadius: 5,
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 600
    },
    notificationDesc: {
        fontSize: 14,
        color: "#404040"
    },
    container: {
        margin: 20
    },
    userContainer: {
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'row',
        marginBottom: 10
    },
    userBio: {
        marginLeft: 20
    },
    userImage: {
        width: 70, 
        height: 70,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#eee',
    },
    userName: {
        fontWeight: 900,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
        fontSize: 20,
        color: "#32305D",
    },
    userEmail: {
        fontSize: 14
    },
    userTitle: {
        fontSize: 14 
    }, 
    logout: {
        backgroundColor: 'white',
    },
    notifications: {
        borderTopWidth: 1,
        borderTopColor: '#d9d9d9',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
    },
    notificationsTitle: {
        fontWeight: 900,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
        fontSize: 20,
        color: "#32305D",
        marginTop: 20,
        marginBottom: 20
    }
})

export { profileStyles };