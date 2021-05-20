import React from 'react';
import { View, Text, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import CustomButton from '../../../components/UI/Button';
import CustomSwitch from '../../../components/UI/Switch';

import userActions from '../../../store/actions/UserActions';
import { profileStyles } from './styles';

const Profile = props => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const loggedInUser = props.loggedInUser;

    const handleLogout = () => {
        dispatch(userActions.logUserOut());
    }

    return (
        <View style={profileStyles.container}>

            <View style={profileStyles.userContainer}>
                <Image style={profileStyles.userImage} source={{uri: loggedInUser.image}} />
                <View style={profileStyles.userBio}>
                    <Text style={profileStyles.userName}>{loggedInUser.name}</Text>
                    <Text style={profileStyles.userEmail}>{loggedInUser.email}</Text>
                    <Text style={profileStyles.userTitle}>{loggedInUser.title}</Text>
                </View>     
            </View>
            <CustomButton btnTextType="center" title="Edit Profile" onPress={() => navigation.navigate("Edit Profile")}/>

            <View style={profileStyles.notifications}>
                <Text style={profileStyles.notificationsTitle}>Notifications</Text>
                <View style={profileStyles.notificationContainer}>
                    <View>
                        <Text style={profileStyles.notificationTitle}>Chat</Text>
                        <Text style={profileStyles.notificationDesc}>When you receive a new message</Text>
                    </View>
                    <CustomSwitch />
                </View>
                <View style={profileStyles.notificationContainer}>
                    <View>
                        <Text style={profileStyles.notificationTitle}>Event reminder</Text>
                        <Text style={profileStyles.notificationDesc}>An hour before events you are going to</Text>
                    </View>
                    <CustomSwitch />
                </View>
            </View>


            <CustomButton style={profileStyles.logout} btnTextType="center" btnBgColor="white" title="Log Out" onPress={() => handleLogout()}/>
        </View>
    )
}




export default Profile;