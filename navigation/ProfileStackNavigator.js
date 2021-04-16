import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/Profile/EditProfile/EditProfile';
import ChangePassword from '../screens/Profile/ChangePassword/ChangePassword';


export default function ProfileStackNavigator() {
    const Stack = createStackNavigator();
    const loggedInUser = useSelector(state => state.UserReducer.userSession);

    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" 
                        component={() => <Profile loggedInUser={loggedInUser}/>} />
            <Stack.Screen name="Edit Profile"
                        component={() => <EditProfile loggedInUser={loggedInUser} />} />
            <Stack.Screen name="ChangePassword" 
                        component={() => <ChangePassword loggedInUser={loggedInUser}/>} />
        </Stack.Navigator>
    );
}