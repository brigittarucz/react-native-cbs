import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Profile = props => {
    const navigation = useNavigation();
    const loggedInUser = props.loggedInUser;

    const handleLogout = () => {
        console.log(Logout)
    }

    return (
        <View>
            <Image source={{
                    uri: loggedInUser.image,
            }} />
            <Text>{loggedInUser.name}</Text>
            <Text>{loggedInUser.email}</Text>
            <Text>{loggedInUser.title}</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate("Edit Profile")}/>


            <Button title="Log Out" onPress={() => handleLogout()}/>
        </View>
    )
}

export default Profile;