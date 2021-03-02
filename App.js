import 'react-native-gesture-handler';

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Chat from './screens/Chat';
import Discover from './screens/Discover';
import Menu from './screens/Menu';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import store from './store/StoreConfiguration';
import { Provider } from 'react-redux';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
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
            component={Chat}
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
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
