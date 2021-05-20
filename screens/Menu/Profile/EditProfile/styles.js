import { Platform, StyleSheet } from 'react-native';


const editProfileStyles = StyleSheet.create({
    container: {
        margin: 20
    },
    userImage: {
        width: 85, 
        height: 85,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#eee',
    },
    input: {
        marginTop: 20
    },
    imageContainer: {
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    imageContainerDetails: {
        width: '130px',
        height: 60
    },
    imageContainerText: {
        color: 'rgb(50,48,93)', 
        textTransform: 'uppercase', 
        fontWeight: 700,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
        marginBottom: -15
    }
})

export { editProfileStyles };