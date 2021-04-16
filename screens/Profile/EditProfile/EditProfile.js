import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';

import Input from '../../../components/UI/Input';
import userActions from '../../../store/actions/UserActions';

const EditProfile = props => {
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

export default EditProfile;