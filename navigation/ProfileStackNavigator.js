import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Profile from '../screens/Menu/Profile/Profile';
import EditProfile from '../screens/Menu/Profile/EditProfile/EditProfile';

export default function ProfileStackNavigator() {
    const Stack = createStackNavigator();
    const loggedInUser = useSelector(state => state.UserReducer.userSession);

    // console.log(loggedInUser);

    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" 
                        component={() => <Profile loggedInUser={loggedInUser}/>} />
            <Stack.Screen name="Edit Profile"
                        component={() => <EditProfile loggedInUser={loggedInUser} />} />
        </Stack.Navigator>
    );
}