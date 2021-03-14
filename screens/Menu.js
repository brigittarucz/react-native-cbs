import React from 'React';
import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Input from '../components/UI/Input';
import { useDispatch } from 'react-redux';
import userActions from '../store/actions/UserActions';

const ProfileScreen = props => {
    const navigation = useNavigation();
    const loggedInUser = props.loggedInUser;

    return (
        <View>
            <Text>Profile Screen</Text>
            <Text>{loggedInUser.name}</Text>
            <Text>{loggedInUser.title}</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate("Edit Profile")}/>
        </View>
    )
}

const EditProfileScreen = props => {
    const loggedInUser = props.loggedInUser;

    const [changeName, setChangeName] = useState(loggedInUser.name); // lift up
    const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
    const [errorMsg, setErrorMsg] = useState('');
    const dispatch = useDispatch();

    const handleNewInput = (enteredText) => {
        // setTouched(true);
        console.log(enteredText)
        enteredText === '' ? setNameValid(false) : setNameValid(true);
        setChangeName(enteredText);
    };

    const handleSave = () => {
        if (nameValid) {
            // dispatch a redux action to save the new user obj.
            loggedInUser.name = changeName;
            dispatch(userActions.saveUser({userSession: loggedInUser }))
        } else {
            // Display an alert saying: Fix the errors.
            setErrorMsg('Invalid input');
        }
    };

    return (
        <View>
            <Text>Edit Profile Screen</Text>
            <Input style={{margin:10, borderColor: 'black', borderWidth: 2}} 
                label="Username" 
                username={changeName} 
                handleNewInput={handleNewInput}
                nameValid={nameValid}
                error={errorMsg}/>
            <Button title="Save" onPress={handleSave} />
        </View> 
    )
}

const Menu = props => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    const loggedInUser = useSelector(state => state.UserReducer.userSession);

    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen name="Profile" 
                        component={() => <ProfileScreen loggedInUser={loggedInUser}/>} />
            <Stack.Screen name="Edit Profile"
                        component={() => <EditProfileScreen loggedInUser={loggedInUser} />} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({

});

export default Menu;