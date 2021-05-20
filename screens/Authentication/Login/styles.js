import { StyleSheet, Platform } from 'react-native';

const loginStyles = StyleSheet.create({
    container: {
        margin: 15,
    },
    mainContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    logoContainer: {
        marginTop: 15, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        color: 'rgb(50,48,93)', 
        fontSize: 22,
        fontWeight: 700,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'
    },
    margin: {
        marginTop: 20,
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: 'rgb(80,80,165)', 
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 700,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'
    },
    noAccountText: {
        color: 'rgb(80,80,165)',
        textAlign: 'center'
    }
});

export { loginStyles };