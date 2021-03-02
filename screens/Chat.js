import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import { View, Text, StyleSheet, FlatList, Button,TouchableOpacity } from 'react-native';
import { CHATROOMS, PRIVATEUSERS } from './../data/dummy-data';
import ChatRoom from '../components/ChatRoom/ChatRoom';
import ChatConversation from '../components/ChatConversation/ChatConversation';

const Chat = props => {
    const navigation = useNavigation();

    const loggedInUserPrivate = PRIVATEUSERS[0];
    // Only one additional public identity for now
    const loggedInUserPublic = PRIVATEUSERS[0].additionalPublicIdentities[0];
    var tabScreens = null;

    // Filter chatrooms by loggedInUserPrivate and loggedInUserPublic
    const loggedInUserChatRooms = CHATROOMS.filter(chatroom => (
        chatroom.name[0].id == loggedInUserPublic.id ||
        chatroom.name[0].id == loggedInUserPrivate.id ||
        chatroom.name[1].id == loggedInUserPublic.id ||
        chatroom.name[1].id == loggedInUserPrivate.id ?
        chatroom : false
    ));

    console.log(loggedInUserChatRooms);
    // Sanitize name and image by loggedInUserPrivate and loggedInUserPublic
// check if image or arr
    return (
        <View>
            {/* <FlatList 
                data={CHATROOMS}
                renderItem={itemData => (
                    <TouchableOpacity
                        onPress={() => 
                            navigation.navigate('Chat Conversation', {
                                item: itemData.item
                            })
                        } >
                        <ChatRoom item={itemData.item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            /> */}
        </View>
    );
}


const ChatMessage = props => {
    return (
        <Text>Place here chat conversation</Text>
    );
}

const StackNav = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName="Chat">
            <Stack.Screen name="Chat" 
                        component={TopTabs}
                        options={{
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
                                    />
                                </View>
                            )
                        }} 
                        />
            <Stack.Screen name="Chat Message" 
                        component={ChatMessage} 
                        />    
            <Stack.Screen name="Chat Conversation"
                        component={ChatConversation}
                        options={{
                            headerTitle: "Chat".toUpperCase(),
                            headerTintColor: "#5050A5",
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                fontWeight: "bold",
                                fontSize: 20
                            },
                            headerLeft: () => (
                                <View style={{margin: 20, transform: [{rotate: '270deg'}]}}>
                                    <MaterialCommunityIcons
                                        name="apple-keyboard-control"
                                        color="#5050A5"
                                        size="32px"
                                        onPress={() => navigation.goBack()}
                                    />
                                </View>
                            ),
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
                            }}}/>
        </Stack.Navigator>
   )                         
}


const TopTabs = () => {
    const Tab = createMaterialTopTabNavigator();

    const loggedInUser = PRIVATEUSERS[0];
    var tabScreens = null;

    if(loggedInUser.additionalPublicIdentities.length) {
        tabScreens = loggedInUser.additionalPublicIdentities.map(publicUser => (
            <Tab.Screen 
                name={publicUser.name} 
                component={Chat}
                publicUser={publicUser} />
        ))
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#5050A5",
                inactiveTintColor: "#B7B7B7",
                labelStyle: {
                    fontSize: 18,
                    fontWeight: "bold"
                },
                barStyles: {
                    backgroundColor: "green"
                }
                
            }}> 
            <Tab.Screen 
                name={loggedInUser.name} 
                // Change chat
                component={Chat} />           
            {/* { tabScreens }        */}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    
});

export default StackNav;