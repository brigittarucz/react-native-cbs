import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, Button } from 'react-native';
import Input from '../../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { createChatroom } from '../../../store/actions/ChatActions';
import chatActions from '../../../store/actions/ChatActions';

import PrivateUser from '../../../models/PrivateUser';

const NewChatroom = props => {
    // const dispatch = useDispatch();
    // const [chatroomName, setChatroomName] = useState('');
    // const [chatroomNameValid, setChatroomNameValid] = useState(false);

    // return (
    //     <View>
    //     <Input label="Chatroom name"
    //         error="Please fill out your chatroom name"
    //         text={chatroomName} nameValid={chatroomNameValid}
    //         onValid={valid => setChatroomNameValid(valid)}
    //         setContent={content => setChatroomName(content)}/>
    //     <Button title="Save Chatroom" onPress={() => {dispatch(chatActions.createChatroom(chatroomName))}}>Save Chatroom</Button>
    //     </View>
    // );

    const token = useSelector((state) => state.UserReducer.idToken)

    const [userSearch, setUserSearch] = useState('');
    const [userSearchValid, setUserSearchValid] = useState(false);

    const [searchResult, setSearchResult] = useState(<Text>Input your search in the box to get results!</Text>)

    const handleSearchUser = () => {
        getUsers(token)
            .then(res => {
                var usersObj = res;
                var usersObjKeys = Object.keys(usersObj)

                var users = [];

                for(var key of usersObjKeys) {
                    var user = new PrivateUser(key,
                                               usersObj[key].name,
                                               usersObj[key].email,
                                               '',
                                               usersObj[key].image,
                                               usersObj[key].title,
                                               usersObj[key].chatNotification,
                                               usersObj[key].additionalPublicIdentity)
                    
                    users.push(user);
                }

                console.log(users);
            })
            .catch(error => console.log(error))
    }

    return (
        <View>
            <Input label="Search user"
                error="Please fill at least 3 characters"
                text={userSearch} nameValid={userSearchValid}
                onValid={valid => setUserSearchValid(valid)}
                setContent={content => setUserSearch(content)}/>
            <Button title="Search user" onPress={() => handleSearchUser()}/>

            {searchResult}
        </View>
    );
}

export default NewChatroom;

const getUsers = async (token) => {
    const response = await fetch(
        "https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=" +
            token,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Could not get user");
    } else {
        var users = await response.json();
        return users;
    }
};
