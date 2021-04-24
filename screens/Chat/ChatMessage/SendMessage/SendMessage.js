import React from 'react';
import 'react-native-gesture-handler';
import { View, Image, TextInput, Button } from 'react-native';
import { chatStartStyles } from './styles';

const SendMessage = props => {

    const textChangeHandler = () => {
        console.log("Text Change Handler")
    }

    const sendMessageHandler = () => {
        console.log("Send Message")
    }

    return (
        <View style={chatStartStyles.start}>
                <Image style={chatStartStyles.startImage} source='https://randomuser.me/api/portraits/women/0.jpg' />
                <TextInput onChangeText={(event) => textChangeHandler(event)} style={chatStartStyles.startInput} placeholder="Write message"/>
                <View style={{margin: 10}}>
                    <Button onPress={() => sendMessageHandler()} title="Send"></Button>
                </View>
        </View>
    )
};

export default SendMessage;
