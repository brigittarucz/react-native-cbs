import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/UI/Button';
import CustomSwitch from '../../../components/UI/Switch';

const Profile = props => {
    const navigation = useNavigation();
    const loggedInUser = props.loggedInUser;

    const handleLogout = () => {
        console.log(Logout)
    }

    return (
        <View style={profileStyles.container}>
            {/* <Image source={{
                    uri: loggedInUser.image,
            }} />
            <Text>{loggedInUser.name}</Text>
            <Text>{loggedInUser.email}</Text>
            <Text>{loggedInUser.title}</Text> */}
            <View style={profileStyles.userContainer}>
                <Image style={profileStyles.userImage} source={{uri: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"}} />
                <View style={profileStyles.userBio}>
                    <Text style={profileStyles.userName}>User name</Text>
                    <Text style={profileStyles.userEmail}>User email</Text>
                    <Text style={profileStyles.userTitle}>User title</Text>
                </View>     
            </View>
            <CustomButton btnTextType="center" title="Edit Profile" onPress={() => navigation.navigate("Edit Profile")}/>

            <View style={profileStyles.notifications}>
                <Text style={profileStyles.notificationsTitle}>Notifications</Text>
                <View style={profileStyles.notificationContainer}>
                    <View>
                        <Text>Chat</Text>
                        <Text>When you receive a new message</Text>
                    </View>
                    <CustomSwitch />
                </View>
                <View style={profileStyles.notificationContainer}>
                    <View>
                        <Text>Event reminder</Text>
                        <Text>An hour before events you are going to</Text>
                    </View>
                    <CustomSwitch />
                </View>
            </View>


            <CustomButton style={profileStyles.logout} btnTextType="center" btnBgColor="white" title="Log Out" onPress={() => handleLogout()}/>
        </View>
    )
}

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


export default Profile;