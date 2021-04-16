import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Button } from 'react-native';
import Input from '../../../components/UI/Input';
import { useDispatch } from 'react-redux';
import { createChatroom } from '../../../store/actions/ChatActions';
import chatActions from '../../../store/actions/ChatActions';
const NewChatroom = props => {
    const dispatch = useDispatch();
    const [chatroomName, setChatroomName] = useState('');
    const [chatroomNameValid, setChatroomNameValid] = useState(false);

    return (
        <View>
        <Input label="Chatroom name"
            error="Please fill out your chatroom name"
            text={chatroomName} nameValid={chatroomNameValid}
            onValid={valid => setChatroomNameValid(valid)}
            setContent={content => setChatroomName(content)}/>
        <Button title="Save Chatroom" onPress={() => {dispatch(chatActions.createChatroom(chatroomName))}}>Save Chatroom</Button>
        </View>
    );
}

export default NewChatroom;