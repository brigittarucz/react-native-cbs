import React from 'react';
import 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { CHATROOMS } from './../data/dummy-data';
import { useSelector } from "react-redux";

import ChatEntry from '../screens/Chat/ChatEntry/ChatEntry';

export default function ChatTabNavigator() {
    const Tab = createMaterialTopTabNavigator();

    const loggedInUser = useSelector((state) => state.UserReducer.userSession);
 
    // Filter private and public chats
    const publicChatRooms = useSelector((state) => state.ChatReducer.publicChats)
    const privateChatRooms = useSelector((state) => state.ChatReducer.privateChats)
console.log(privateChatRooms.chatMessages)
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#5050A5",
                inactiveTintColor: "#B7B7B7",
                labelStyle: {
                    fontSize: 16,
                    fontWeight: "bold"
                },
                barStyles: {
                    backgroundColor: "green"
                }
                
            }}> 
            <Tab.Screen 
                name="CBS Surf" 
                children={() => <ChatEntry chatrooms={publicChatRooms} />}
                />           
            <Tab.Screen 
                name={loggedInUser.email} 
                children={() => <ChatEntry chatrooms={privateChatRooms} />} 
                />  
        </Tab.Navigator>
    )
}
