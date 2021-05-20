import { StyleSheet } from 'react-native';

const eventStyles = StyleSheet.create({
    container: {
        margin: 20, 
        marginBottom: 10, 
        borderWidth: 1, 
        borderColor: 'rgb(221,221,221)', 
        borderRadius: 15 
    },
    image: {
        borderRadius: 15
    },
    imageStyle: {
        borderRadius: 15, 
        overflow: 'hidden'
    },
    containerInfo: {
        padding: 10, 
        marginTop: 45 
    },
    eventTitle: {
        fontWeight: 700, 
        color: 'white', 
        fontSize: 22
    },
    eventOrganization: {
        fontWeight: 200, 
        color: 'white', 
        fontSize: 14
    },
    containerIcons: {
        flexDirection:'row', 
        flexWrap:'wrap', 
        marginTop: 5, 
        marginBottom: 5
    },
    icon: {
        marginRight: 10, 
        color: 'white', 
        fontSize: 16
    },
    textBold: {
        fontWeight: 500, 
        color: 'white', 
        fontSize: 14
    },
    text: {
        fontWeight: 100, 
        color: 'white', 
        fontSize: 14
    }
});

export { eventStyles };