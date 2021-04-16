import React from 'React';
import 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatIndividual from '../screens/Chat/ChatIndividual/ChatIndividual';

import { CHATROOMS, USERS } from './../data/dummy-data';

import ChatPrivate from '../screens/Chat/ChatPrivate/ChatPrivate';
import ChatPublic from '../screens/Chat/ChatPublic/ChatPublic';

export default function ChatTabNavigator() {
    const Tab = createMaterialTopTabNavigator();

    const loggedInUser = USERS[3];
    var tabScreens = null;

    // useEffect(() => {
    //     console.log('[TopTabs] mounted')
    // }, [])

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
