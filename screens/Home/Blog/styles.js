import { StyleSheet } from 'react-native';

const blogStyles = StyleSheet.create({
    container: {
        margin: 20, 
        marginBottom: 10, 
        borderWidth: 1, 
        borderColor: 'rgb(221,221,221)', 
        backgroundColor: 'white', 
        borderRadius: 15, 
        padding: 10
    },
    header: {
        flexDirection:'row', 
        flexWrap:'wrap', 
        alignItems: 'center'
    },
    headerText: {
        color: "rgb(80,80,165)", 
        fontWeight: 700
    },
    icon: {
        color: "rgb(80,80,165)",
        fontSize: 16, 
        marginRight: 5
    },
    title: {
        fontWeight: 700, 
        fontSize: 22, 
        lineHeight: 24, 
        marginTop: 5
    },
    status: {
        marginTop: 5, 
        marginBottom: 5, 
        flexDirection:'row', 
        flexWrap:'wrap', 
        alignItems: 'center', 
        justifyContent: "space-between"
    },
    hourText: {
        color: "rgb(183,183,183)"
    },
    iconContainer: {
        flexDirection:'row', 
        flexWrap:'wrap', 
        alignItems: 'center'
    },
    iconFont: {
        color: "rgb(80,80,165)", 
        fontWeight: 700
    },
    hr: {
        marginTop: 5,
        marginBottom: 10,
        borderBottomColor: 'rgba(183,183,183, 0.4)',
        borderBottomWidth: 0.1,
    },
    authorContainer: {
        dispay: 'flex',
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    authorImage: {
        width: 35, 
        height: 35, 
        borderRadius: 5, 
        marginRight: 5
    }
});

export { blogStyles };