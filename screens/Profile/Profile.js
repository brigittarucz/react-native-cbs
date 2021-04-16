import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Profile = props => {
    const navigation = useNavigation();
    const loggedInUser = props.loggedInUser;

    return (
        <View>
            <Text>Profile Screen</Text>
            <Text>{loggedInUser.name}</Text>
            <Text>{loggedInUser.title}</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate("Edit Profile")}/>
            <Button title="Change Password" onPress={() => navigation.navigate("ChangePassword")}/>
        </View>
    )
}

export default Profile;