import { StyleSheet, Platform } from 'react-native';

const discoverStyles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'white',
        margin: 20,
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    discoverContainer: {
        margin: 20, 
        marginBottom: 10, 
        borderWidth: 1, 
        borderColor: 'rgb(221,221,221)', 
        borderRadius: 15
    },
    discoverText: {
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
        fontWeight: 700,
        fontSize: 22,
        color: 'white',
        marginTop: 50,
        marginBottom: 50,
        textAlign: 'center'
    }
});

export { discoverStyles };