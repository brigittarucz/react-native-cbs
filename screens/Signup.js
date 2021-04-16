import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Input from './../components/UI/Input';
import userActions from '../store/actions/UserActions';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const Signup = props => {
   const dispatch = useDispatch();
   const [email, setEmail] = useState('');
   const [emailValid, setEmailValid] = useState(false);
   const [password, setPassword] = useState('');
   const [passwordValid, setPasswordValid] = useState(false);

   const Stack = createStackNavigator();
   const navigation = useNavigation();

   const handleSignup = () => {
    //   dispatch(userActions.signUserUp({email, password}));
      dispatch(userActions.signUserUp(email, password));
      navigation.navigate('Chat');
   };

   return (
      <View style={styles.container}>
         <Input label="Email"
            error="Please fill out your email"
            text={email} nameValid={emailValid}
            onValid={valid => setEmailValid(valid)}
            setContent={content => setEmail(content)}/>

         <Input label="Password"
            error="Please fill out your password"
            text={password} nameValid={passwordValid}
            onValid={valid => setPasswordValid(valid)}
            setContent={content => setPassword(content)}/>

         <Button title="Signup" onPress={handleSignup}/>
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
 
export default Signup;