import React from 'react';
import { Platform } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Discover from '../screens/Discover/Discover';

export default function HomeStackNavigator() {
    const Stack = createStackNavigator();

    var stackScreenOptions = {
        headerTitle: "Discover".toUpperCase(),
        headerTintColor: "#5050A5",
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'
        },
        headerStyle: {
            borderBottomColor: '#eee',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.30,
            shadowRadius: 5.00,

            elevation: 10,
        },
        cardStyle: {
            backgroundColor: 'rgb(244,244,244)',
            opacity: 1
        }
    }

    return (
        <Stack.Navigator initialRouteName="Discover">
            <Stack.Screen name="Discover"
                          component={Discover}
                          options={stackScreenOptions} />
        </Stack.Navigator>
    )
}