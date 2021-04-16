import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { CHATROOMS, USERS } from './../data/dummy-data';
import ChatRoom from '../components/ChatRoom/ChatRoom';
import ChatIndividual from '../components/ChatIndividual/ChatIndividual';

import Signup from './Signup'; 

import { useSelector } from 'react-redux';
import SessionReducer from '../store/reducers/UserReducers';

import NewChatroom from '../screens/NewChatroom';

// TODO: to be removed and moved in the right component - testing purposes
import Login from './Login';
import ChangePassword from './ChangePassword';

const ChatPublic = props => {
    var _isMounted = false;
    const currentState = useSelector(state => state);
    console.log(currentState);
    const [ currentChatrooms, setCurrentChatrooms] = useState([])
    const navigation = useNavigation();

    const loggedInUserPrivate = USERS[3];
    const loggedInUserPublic = USERS[loggedInUserPrivate.additionalPublicIdentities[0].id-1];
    
    var tabScreens = null;
 
    useEffect(() => {
        _isMounted = true;

        if(_isMounted) {
            setCurrentChatrooms(getChatRooms(props.chatrooms, loggedInUserPublic, loggedInUserPrivate));
            return () => {
               _isMounted = false;
            }
        }
    }, [])
    
    return (
        <View>
            <FlatList 
                data={currentChatrooms}
                extraData={navigation}
                renderItem={itemData => (
                    <TouchableOpacity
                        onPress={() => 
                            navigation.navigate('Chat Individual', {
                                item: itemData.item
                            })
                        } >
                        <ChatRoom item={itemData.item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const ChatPrivate = props => {

    var _isMounted = false;
    const currentState = useSelector(state => state);
    // console.log(currentState);
    const [ currentChatrooms, setCurrentChatrooms] = useState([])

    const navigation = useNavigation();

    const loggedInUserPrivate = USERS[3];
    // Only one additional public identity for now
    // TODO: pass through props loggedInUserPrivate & public
    const loggedInUserPublic = USERS[loggedInUserPrivate.additionalPublicIdentities[0].id-1];
    var tabScreens = null;
 
    useEffect(() => {
        _isMounted = true;

        if(_isMounted) {
            setCurrentChatrooms(getChatRooms(props.chatrooms, loggedInUserPublic, loggedInUserPrivate));
            return () => {
               _isMounted = false;
            }
        }
    }, [])
    
    return (
        <View>
            <FlatList 
                data={currentChatrooms}
                extraData={navigation}
                renderItem={itemData => (
                    <TouchableOpacity
                        onPress={() => 
                            navigation.navigate('Chat Individual', {
                                item: itemData.item
                            })
                        } >
                        <ChatRoom item={itemData.item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
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
        <Stack.Navigator initialRouteName="NewChatroom">
            <Stack.Screen name="NewChatroom" 
                        component={NewChatroom} />
            <Stack.Screen name="ChangePassword" 
                        component={ChangePassword} />
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
            {/* <Stack.Screen name="Chat Conversation"
                        component={ChatIndividual}
                        options={{
                            headerTitle: "Chat",
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
                            }}}/> */}
        </Stack.Navigator>
   )                         
}


const TopTabs = () => {
    const Tab = createMaterialTopTabNavigator();

    const loggedInUser = USERS[3];
    var tabScreens = null;

    useEffect(() => {
        console.log('[TopTabs] mounted')
    }, [])

    // Filter private and public chats
    const publicChatRooms = CHATROOMS.filter(chatroom => chatroom.isPublicChat)
    const privateChatRooms = CHATROOMS.filter(chatroom => !chatroom.isPublicChat)

    if(loggedInUser.additionalPublicIdentities.length) {
        tabScreens = loggedInUser.additionalPublicIdentities.map(publicUserId => (
            <Tab.Screen 
                name={USERS[publicUserId.id-1].name} 
                publicUser={USERS[publicUserId.id-1]}
                children={() => <ChatPrivate chatrooms={privateChatRooms}/>} 
                />
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
             <Tab.Screen name="Chat Individual"
                        component={ChatIndividual}
                        options={{
                            headerTitle: "Chat",
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
            <Tab.Screen 
                name={loggedInUser.name} 
                children={() => <ChatPublic chatrooms={publicChatRooms}/>}
                />           
            { tabScreens }       
        </Tab.Navigator>
    )
}


function getChatRooms(chatrooms, userPublic, userPrivate) {
    // Filter chatrooms by loggedInUerPrivate and loggedInUerPublic
    var loggedInUserChatRooms = chatrooms.filter(chatroom => (
        chatroom.name[0].id == userPublic.id ||
        chatroom.name[0].id == userPrivate.id ||
        chatroom.name[1].id == userPublic.id ||
        chatroom.name[1].id == userPrivate.id ?
        chatroom : false
    ));

    // Sanitize name and image by loggedInUerPrivate and loggedInUerPublic
    for (var chatroom of loggedInUserChatRooms) {
        if (chatroom.name[0].id == userPublic.id &&
            chatroom.name[1].id == userPrivate.id) {
            chatroom.name = chatroom.name[0].name;
            chatroom.image = chatroom.image[0].image;
        } else if (chatroom.name[1].id == userPublic.id &&
            chatroom.name[0].id == userPrivate.id) {
            chatroom.name = chatroom.name[1].name;
            chatroom.image = chatroom.image[1].image;
        } else {
            if (chatroom.name[0].id == userPublic.id ||
                chatroom.name[0].id == userPrivate.id) {
                chatroom.name = chatroom.name[1].name;
            } else {
                chatroom.name = chatroom.name[0].name;
            }

            if (chatroom.image[0].id == userPublic.id ||
                chatroom.image[0].id == userPrivate.id) {
                chatroom.image = chatroom.image[1].image;
            } else {
                chatroom.image = chatroom.image[0].image;
            }
        }
    }

    return loggedInUserChatRooms
}

export default StackNav;