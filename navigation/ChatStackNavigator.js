import React from 'react';

import { View } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NewChatroom from '../screens/Chat/NewChatroom/NewChatroom';
import ChatTabNavigator from './ChatTabNavigator';

import ChatMessage from '../screens/Chat/ChatMessage/ChatMessage';

export default function ChatStackNavigator() {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    var stackNewOptions = {
        headerTitle: "Chat",
        headerTintColor: "#5050A5",
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20
        },
        // headerLeft: () => (
        //     <View style={{margin: 20, transform: [{rotate: '270deg'}]}}>
        //         <MaterialCommunityIcons
        //             name="apple-keyboard-control"
        //             color="#5050A5"
        //             size="32px"
        //             onPress={() => navigation.goBack()}
        //         />
        //     </View>
        // ),
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
            backgroundColor: 'white',
            opacity: 1
        }};

    var stackTabOptions = {
        headerTitle: "Chat".toUpperCase(),
        headerTintColor: "#5050A5",
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20
        },
        headerStyle: {
            borderBottomColor: "white"
        },
        cardStyle: {
            backgroundColor: 'black',
            opacity: 1
        },
        headerRight: () => (
            <View style={{margin: 20}}>
                <MaterialCommunityIcons
                    name="message-plus-outline"
                    color="#5050A5"
                    size="32px"
                    onPress={() => navigation.navigate("NewChatroom")}
                />
            </View>
        )
    }

    return (
        <Stack.Navigator initialRouteName="ChatTabNavigator">
            <Stack.Screen name="NewChatroom" 
                        component={NewChatroom}
                        options={stackNewOptions} />
            <Stack.Screen name="ChatMessage" 
                        component={ChatMessage} />
            <Stack.Screen name="ChatTabNavigator" 
                        component={ChatTabNavigator}
                        options={stackTabOptions} /> 
        </Stack.Navigator>
   )                         
}