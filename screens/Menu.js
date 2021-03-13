import React from 'React';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Input from '../components/UI/Input';

const ProfileScreen = props => {
    const navigation = useNavigation();
    const loggedInUser = useSelector(state => state.UserReducer.userSession);

    return (
        <View>
            <Text>Profile Screen</Text>
            <Text>{loggedInUser.name}</Text>
            <Text>{loggedInUser.title}</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate("Edit Profile")}/>
        </View>
    )
}

const EditProfileScreen = props => {
    const loggedInUser = useSelector(state => state.UserReducer.userSession);

    const handleSave = () => {
        if (nameValid) {
            // dispatch a redux action to save the new user obj.
        } else {
            // Display an alert saying: Fix the errors.
        }
    };

    return (
        <View>
            <Text>Edit Profile Screen</Text>
            <Input style={{margin:10, borderColor: 'black', borderWidth: 2}} 
                label="Username" 
                value={loggedInUser.name} 
                error="Please fill out your name"/>
            <Button title="Save" onPress={handleSave} />
        </View> 
    )
}

const Menu = props => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen name="Profile" 
                        component={ProfileScreen} />
            <Stack.Screen name="Edit Profile"
                        component={EditProfileScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({

});

export default Menu;