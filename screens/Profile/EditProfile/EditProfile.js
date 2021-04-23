import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Button, Image } from 'react-native';

import Input from '../../../components/UI/Input';
import userActions from '../../../store/actions/UserActions';

const EditProfile = props => {
    const loggedInUser = props.loggedInUser;

    console.log(loggedInUser);

    const [name, setName] = useState(loggedInUser.name);
    const [nameValid, setNameValid] = useState(false);

    const [studyProgramme, setStudyProgramme] = useState(loggedInUser.title);
    const [studyProgrammeValid, setStudyProgrammeValid] = useState(false);

    // const [changeName, setChangeName] = useState(loggedInUser.name); // lift up
    // const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
    // const [errorMsg, setErrorMsg] = useState('');
    const dispatch = useDispatch();

    // const handleNewInput = (enteredText) => {
    //     enteredText === '' ? setNameValid(false) : setNameValid(true);
    //     setChangeName(enteredText);
    // };

    const handleEditProfile = () => {
        if (nameValid) {
            loggedInUser.name = name;
            
            dispatch(userActions.saveUser({userSession: loggedInUser }))
        } else {
            setErrorMsg('Invalid input');
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