import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import Input from '../../../../components/UI/Input';
import userActions from '../../../../store/actions/UserActions';


const EditProfile = props => {
    const loggedInUser = props.loggedInUser;

    const idToken = useSelector((state) => state.UserReducer.idToken);

    const navigation = useNavigation();

    const [name, setName] = useState(loggedInUser.name);
    const [nameValid, setNameValid] = useState(false);

    const [studyProgramme, setStudyProgramme] = useState(loggedInUser.title);
    const [studyProgrammeValid, setStudyProgrammeValid] = useState(false);

    // const [changeName, setChangeName] = useState(loggedInUser.name); // lift up
    // const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
    const [errorMsg, setErrorMsg] = useState('');
    const dispatch = useDispatch();

    // const handleNewInput = (enteredText) => {
    //     enteredText === '' ? setNameValid(false) : setNameValid(true);
    //     setChangeName(enteredText);
    // };

    const handleEditProfile = () => {
        if (nameValid || studyProgrammeValid) {
            loggedInUser.name = name;
            loggedInUser.title = studyProgramme
            dispatch(userActions.saveUser({userSession: loggedInUser, auth: idToken }))
                .then(() => {
                    navigation.navigate("Profile");
                }).catch(error => {
                    console.log(error);
                })
        } else {
            setErrorMsg("No changes! Be sure to bring some!")
        }
    };

    return (
        <View>
            <Text>Profile Picture</Text>
            <Button title="Upload"></Button>
            <Image source={{
                    uri: loggedInUser.image,
            }} />
            <Input label="Name"
                error="Invalid Input" value={name}
                text={name} nameValid={nameValid}
                onValid={valid => setNameValid(valid)}
                setContent={content => setName(content)}/>
            <Input label="Study Programme"
                error="Invalid Input" value={studyProgramme}
                text={studyProgramme} studyProgrammeValid={studyProgrammeValid}
                onValid={valid => setStudyProgrammeValid(valid)}
                setContent={content => setStudyProgramme(content)}/>
            <Text>{errorMsg}</Text>
            {/* <Input style={{margin:10, borderColor: 'black', borderWidth: 2}} 
                label="Username" 
                username={changeName} 
                handleNewInput={handleNewInput}
                nameValid={nameValid}
                error={errorMsg}/> */}
            <Button title="Save Changes" onPress={handleEditProfile} />
        </View> 
    )
}

export default EditProfile;