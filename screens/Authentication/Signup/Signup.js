import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../../components/UI/Input';
import userActions from '../../../store/actions/UserActions';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import eventActions from '../../../store/actions/EventActions';


const Signup = props => {
   const dispatch = useDispatch();
   const [email, setEmail] = useState('');
   const [emailValid, setEmailValid] = useState(false);
   const [password, setPassword] = useState('');
   const [passwordValid, setPasswordValid] = useState(false);
   const [name, setName] = useState('');
   const [nameValid, setNameValid] = useState(false);
   const [passwordRepeat, setPasswordRepeat] = useState('');
   const [passwordRepeatValid, setPasswordRepeatValid] = useState(false);


   const [displayStatus, setDisplayStatus] = useState();

   const Stack = createStackNavigator();
   const navigation = useNavigation();

   const handleSignup = () => {
      if(password === passwordRepeat) {
         setDisplayStatus(<ActivityIndicator size="large" color="#0000ff"/>)
         dispatch(userActions.signUserUp(name, email, password))
            .then(() => {
               dispatch(eventActions.setUserEvents())
                  .catch(error => console.log(error))
            })
      } else if (password.length < 6) {
         setDisplayStatus(<Text>Password too weak!</Text>)
      } else {
         setDisplayStatus(<Text>Passwords do not match!</Text>)
      }
   };

   return (
      <View style={styles.container}>
         <Input label="Name"
            error="Please fill out your name"
            text={name} nameValid={nameValid}
            onValid={valid => setNameValid(valid)}
            setContent={content => setName(content)}/>

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

         <Input label="Repeat Password"
            error="Please fill out again your password"
            text={passwordRepeat} nameValid={passwordRepeatValid}
            onValid={valid => setPasswordRepeatValid(valid)}
            setContent={content => setPasswordRepeat(content)}/>

         {displayStatus}

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