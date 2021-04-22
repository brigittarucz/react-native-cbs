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


export { chatFromStyles };