import React from 'react';
import { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Input from './../components/UI/Input';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import userActions from '../store/actions/UserActions';


const ChangePassword = props => {
   const dispatch = useDispatch();
   const [currentPassword, setCurrentPassword] = useState('');
   const [currentPasswordValid, setCurrentPasswordValid ] = useState(false);
   const [newPassword, setNewPassword] = useState('');
   const [newPasswordValid, setNewPasswordValid] = useState(false);
   const [repeatNewPassword, setRepeatNewPassword] = useState('');
   const [repeatNewPasswordValid, setRepeatNewPasswordValid] = useState(false);
   const [error, setNewError] = useState('')

   const Stack = createStackNavigator();
   const navigation = useNavigation();

   const handleChangePassword = () => {
       if(repeatNewPassword !== newPassword) {
           setNewError("Passwords do no match");
       } else {
           const currentUser = props.loggedInUser;
           currentUser.password = newPassword;
           dispatch(userActions.changePassword({userSession: currentUser }));
           navigation.navigate('Chat');
       }
   };

   return (
      <View style={styles.container}>
         <Input label="Current Password"
            error="Please fill out your current password"
            text={currentPassword} nameValid={currentPasswordValid}
            onValid={valid => setCurrentPasswordValid(valid)}
            setContent={content => setCurrentPassword(content)}/>

         <Input label="New Password"
            error="Please fill out your new password"
            text={newPassword} nameValid={newPasswordValid}
            onValid={valid => setNewPasswordValid(valid)}
            setContent={content => setNewPassword(content)}/>

         <Input label="Repeat New Password"
            error="Please repeat your new password"
            text={repeatNewPassword} nameValid={repeatNewPasswordValid}
            onValid={valid => setRepeatNewPasswordValid(valid)}
            setContent={content => setRepeatNewPassword(content)}/>

         <Text style={{width: 180, height: 30}}> {error} </Text>
         <Button title="Change Password" onPress={handleChangePassword}/>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
 },
});
 
export default ChangePassword;