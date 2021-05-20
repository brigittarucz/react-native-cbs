import { StyleSheet } from 'react-native';

const organizationStyles = StyleSheet.create({
    container: {
        margin: 20, 
        marginBottom: 10, 
        backgroundColor: 'white', 
        borderRadius: 15, 
        borderWidth: 1, 
        borderColor: 'rgb(221,221,221)'
    },
    thumbnail: {
        borderTopLeftRadius: 15, 
        borderTopRightRadius: 15, 
        width: '100%', 
        height: 150
    }, 
    imageContainer: {
        width: 110,
        height: 110, 
        borderRadius: 10, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        marginTop: -65,
        marginLeft: 10 
    },
    image: {
        width: 110, 
        height: 110, 
        borderRadius: 10, 
        borderWidth: 5, 
        borderColor: 'white',
    },
    followingButton: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22, 
        backgroundColor: 'white',
        padding: 7,
        elevation: 8, borderRadius: 5, borderWidth: 1,
        width: 150, borderColor: "rgb(80,80,165)", flexDirection:'row', 
        flexWrap:'wrap', alignItems: 'center', justifyContent: 'center',
        left: 150, top: -35
    },
    followingIcon: {
        color: "rgb(80,80,165)", 
        fontSize: 18, 
        fontWeight: 900, 
        marginRight: 5
    },
    followingText: {
        color: "rgb(80,80,165)", 
        fontSize: 17, 
        fontWeight: 700
    },
    textOrganizationName: {
        fontWeight: 700, 
        fontSize: 18, 
        paddingLeft: 10,
        marginTop: -20
    },
    textOrganizationDesc: {
        fontSize: 16, 
        padding: 10
    }
});

export { organizationStyles };