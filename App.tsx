import 'react-native-gesture-handler';

import React from "react";
import { StyleSheet } from "react-native";

import store from './store/StoreConfiguration';
import { Provider } from 'react-redux';

import MainTabNavigator from './navigation/MainTabNavigator';

import { setCustomText } from 'react-native-global-props';
import { Platform, Text } from "react-native";

const customTextInputProps = {
    underlineColorAndroid: 'rgba(0,0,0,0)',
    style: {
      fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'
    }
};

setCustomText(customTextInputProps)

export default function App() {

  // Redux Store is not accessible here

  return (
    <Provider store={store}>
      <MainTabNavigator />
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
