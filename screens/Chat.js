import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import { View, Text, StyleSheet, FlatList, Button,TouchableOpacity } from 'react-native';
import { CHATROOMS } from './../data/dummy-data';
import ChatRoom from '../components/ChatRoom';
import ChatIndividual from '../components/ChatIndividual';

const ChatGroups = props => {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList 
                data={CHATROOMS}
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

  return (
    <Stack.Navigator initialRouteName="Chat Individual">
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
        <Stack.Screen name="Chat Individual"
                      component={ChatIndividual}
                      />
    </Stack.Navigator>
  )
                                
}

const TopTabs = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#5050A5",
                inactiveTintColor: "#B7B7B7",
                labelStyle: {
                    fontSize: 20,
                    fontWeight: "bold"
                },
                barStyles: {
                    backgroundColor: "green"
                }
                
            }}>
            <Tab.Screen 
                name="ChatGroups" 
                component={ChatGroups} />
            <Tab.Screen 
                name="ChatIndividual" 
                component={ChatIndividual} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    
});

export default StackNav;