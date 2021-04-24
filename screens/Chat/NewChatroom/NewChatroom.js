import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import Input from '../../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { createChatroom } from '../../../store/actions/ChatActions';
import chatActions from '../../../store/actions/ChatActions';
import { useNavigation } from '@react-navigation/native';

import PrivateUser from '../../../models/PrivateUser';
import ChatRoom from '../../../models/ChatRoom';
import { uuid } from 'uuidv4';
const NewChatroom = props => {
   
    const token = useSelector((state) => state.UserReducer.idToken)
    const userId = useSelector((state) => state.UserReducer.userSession.id)

    const [userSearch, setUserSearch] = useState('');
    const [userSearchValid, setUserSearchValid] = useState(false);

    const [searchResult, setSearchResult] = useState(<Text>Input your search in the box to get results!</Text>)

    const handleSearchUser = () => {
        if(userSearch.length < 3) {
            setSearchResult(<Text>Minimum 3 characters needed!</Text>)
        } else {
            getUsers(token)
                .then(res => {
                    var usersObj = res;
                    var usersObjKeys = Object.keys(usersObj)

                    var users = [];

                    for(var key of usersObjKeys) {

                        // Match string name to users
                        var customReg = new RegExp("^" + userSearch, "i");

                        if(usersObj[key].name.match(customReg)) {

                            // Exclude current user from searchable users
                            if(key !== userId) {

                                var user = new PrivateUser(key,
                                    usersObj[key].name,
                                    usersObj[key].email,
                                    '',
                                    usersObj[key].image,
                                    usersObj[key].title,
                                    usersObj[key].chatNotification,
                                    usersObj[key].additionalPublicIdentity)
            
                                users.push(user);
                                console.log(users);

                            }
                        }    
                    }


                    if(users.length) {
                        var flatlist = (
                            <FlatList
                                data={users}
                                keyExtractor={item => item.id.toString()}
                                renderItem={user => (
                                    <UserResult id={user.item.id} name={user.item.name} />
                                )}
                            />
                        )
    
                        setSearchResult(flatlist)
                    } else {
                        setSearchResult(<Text>No matches for your search query</Text>)
                    }
                    
                })
            .catch(error => console.log(error))
        }
        
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

const UserResult = (props) => {
    const navigation = useNavigation();
    const chats = useSelector((state) => state.ChatReducer.privateChats);
    const userSessionName = useSelector((state) => state.UserReducer.userSession.name);

    const handleSetChatroom = () => {
        console.log(props.item);

        // Check if the users have previously chatted
        var chatroom = false;

        chats.forEach(chat => {
            chat.chatMessages.forEach(message => {
                console.log(message);
                console.log(props.id);
                if(message.userFrom === props.id || message.userTo === props.id) {
                    
                    chatroom = chat;
                    console.log(chatroom);
                }
            })
        })

        if(chatroom !== false) {
            // If yes import chat room and navigate
            chatroom = new ChatRoom(chatroom.id,
                                    chatroom.createdDate,
                                    chatroom.names.name_1,
                                    chatroom.names.name_2,
                                    chatroom.image,
                                    chatroom.chatMessages,
                                    chatroom.isPublicChat)
            
            navigation.navigate('ChatMessage', {item: chatroom});
        
        } else {
            // If not create new empty room and navigate
            chatroom = new ChatRoom(uuid(),
                                    new Date().getTime(),
                                    props.name,
                                    userSessionName,
                                    "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
                                    [],
                                    false);

            navigation.navigate('ChatMessage', {item: chatroom, userTo: props.id});
        }
        
    
        // navigation.navigate('ChatMessage', {item: props.item})} >

    }

    return (
        <View>
            <TouchableOpacity onPress={() => handleSetChatroom()}>
                <Text> {props.name} </Text>
            </TouchableOpacity>
        </View>
    )
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
