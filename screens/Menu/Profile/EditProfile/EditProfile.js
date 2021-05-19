import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Platform, Image, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import Input from '../../../../components/UI/Input';
import userActions from '../../../../store/actions/UserActions';
import CustomButton from '../../../../components/UI/Button';


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

const editProfileStyles = StyleSheet.create({
    container: {
        margin: 20
    },
    userImage: {
        width: 85, 
        height: 85,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#eee',
    },
    input: {
        marginTop: 20
    },
    imageContainer: {
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    imageContainerDetails: {
        width: '130px',
        height: 60
    },
    imageContainerText: {
        color: 'rgb(50,48,93)', 
        textTransform: 'uppercase', 
        fontWeight: 700,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
        marginBottom: -15
    }
})

export default EditProfile;