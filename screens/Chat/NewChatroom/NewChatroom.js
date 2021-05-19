// REACT
import React, { useState } from "react";
// REACT NATIVE
import 'react-native-gesture-handler';
import { View, Text, FlatList } from 'react-native';
// REDUX
import { useSelector } from 'react-redux';
// COMPONENTS
import Input from '../../../components/UI/Input';
// MODELS
import UserResult from './UserResult/UserResult';
import PrivateUser from '../../../models/PrivateUser';
import CustomButton from '../../../components/UI/Button';
// OTHERS
import { getUsers } from '../utils';

const NewChatroom = () => {
   
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
        <View style={{height: '100%', width: '100%', backgroundColor: "#F5F5F5"}}>
            <View style={{margin: 20}}>
                <Input label="Search user"
                    error="Please fill at least 3 characters"
                    text={userSearch} nameValid={userSearchValid}
                    onValid={valid => setUserSearchValid(valid)}
                    setContent={content => setUserSearch(content)}/>
                <CustomButton title="Search user" onPress={() => handleSearchUser()}/>

                {searchResult}
            </View>
        </View>
    );
}



export default NewChatroom;
