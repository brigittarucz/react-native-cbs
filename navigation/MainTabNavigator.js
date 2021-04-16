import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import ChatStackNavigator from '../navigation/ChatStackNavigator';
import Discover from '../screens/Discover';
import Menu from '../screens/Menu';
import Login from '../screens/Authentication/Login/Login';
import Signup from '../screens/Authentication/Signup/Signup';

import { useSelector } from 'react-redux';

export default function MainTabNavigator() {
    const Tab = createBottomTabNavigator();
    const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn);
    console.log(isLoggedIn);

    if(!isLoggedIn) {
        var tabs = (
        <Tab.Navigator
            initialRouteName="Login">
            <Tab.Screen name="Signup" 
                component={Signup} />
            <Tab.Screen name="Login" 
                component={Login} /> 
        </Tab.Navigator>  )
    } else {
        var tabs = (
        <Tab.Navigator>
             <Tab.Screen
                name="Home"
                component={Home}
                options={() => ({
                tabBarIcon: () => (
                    <MaterialCommunityIcons
                    name="home"
                    color="#5050A5"
                    size="32px"
                    />
                ),
                })}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={() => ({
                tabBarIcon: () => (
                    <MaterialCommunityIcons
                    name="magnify"
                    color="#5050A5"
                    size="28px"
                    />
                ),
                })}
            />
            <Tab.Screen
                name="Chat"
                component={ChatStackNavigator}
                options={() => ({
                tabBarIcon: () => (
                    <MaterialCommunityIcons
                    name="chat"
                    color="#5050A5"
                    size="32px"
                    />
                ),
                })}
            />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={() => ({
                tabBarIcon: () => (
                    <MaterialCommunityIcons
                    name="menu"
                    color="#5050A5"
                    size="28px"
                    />
                ),
                })}
            />
        </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            {tabs}
            {/* <Tab.Navigator
            initialRouteName="Chat"
            tabBarOptions={{
                activeTintColor: "#5050A5",
                inactiveTintColor: "#B7B7B7",
                labelStyle: {
                fontSize: 12,
                marginBottom: 5,
                },
                style: {
                height: 60,
                },
            }}
            >
            
           
            </Tab.Navigator> */}
      </NavigationContainer>
    )
}