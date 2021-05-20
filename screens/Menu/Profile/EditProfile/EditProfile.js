import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';


import Input from '../../../../components/UI/Input';
import userActions from '../../../../store/actions/UserActions';
import CustomButton from '../../../../components/UI/Button';

import { editProfileStyles } from './styles';

const EditProfile = props => {
    const loggedInUser = props.loggedInUser;

    const idToken = useSelector((state) => state.UserReducer.idToken);

    const navigation = useNavigation();

    // const [name, setName] = useState(loggedInUser.name);
    const [name, setName] = useState("John");
    const [nameValid, setNameValid] = useState(false);

    // const [studyProgramme, setStudyProgramme] = useState(loggedInUser.title);
    const [studyProgramme, setStudyProgramme] = useState("Med");
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
        <View style={editProfileStyles.container}>

            {/* <Image source={{
                    uri: loggedInUser.image,
            }} /> */}
            <View style={editProfileStyles.imageContainer}>
                <View style={editProfileStyles.imageContainerDetails}>
                    <Text style={editProfileStyles.imageContainerText}>PROFILE PICTURE</Text>
                    <CustomButton btnTextType="center" title="Upload"/>
                </View>
                <Image style={editProfileStyles.userImage} source={{
                    uri: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"
                }} />
            </View>
            
            <View style={editProfileStyles.input}>
                <Input label="What is your name?"
                    error="Invalid Input" value={name}
                    text={name} nameValid={nameValid}
                    onValid={valid => setNameValid(valid)}
                    setContent={content => setName(content)}/>
            </View>

            <View style={editProfileStyles.input}>
                <Input label="Study Programme"
                    error="Invalid Input" value={studyProgramme}
                    text={studyProgramme} studyProgrammeValid={studyProgrammeValid}
                    onValid={valid => setStudyProgrammeValid(valid)}
                    setContent={content => setStudyProgramme(content)}/>
            </View>

            <Text>{errorMsg}</Text>

            <CustomButton title="Save Changes" onPress={handleEditProfile} />
        </View> 
    )
}


export default EditProfile;