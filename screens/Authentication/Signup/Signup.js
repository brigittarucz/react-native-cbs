import React from 'react';
import { useState } from 'react';
import { View, Text, Platform, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../../components/UI/Input';
import userActions from '../../../store/actions/UserActions';
import eventActions from '../../../store/actions/EventActions';

import logo from '../../../assets/logo.png';
import CustomButton from '../../../components/UI/Button';

const Signup = () => {
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

   const handleSignup = () => {
      if(password === passwordRepeat) {
         setDisplayStatus(<ActivityIndicator size="large" color="rgb(80,80,165)"/>)
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
         <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={logo} style={{width: 140, height: 140}} />
         </View>

         <Text style={{color: 'rgb(50,48,93)', 
                            fontSize: 22,
                            fontWeight: 700,
                            fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'}}>Sign up to get access</Text>

         <View style={{
                    marginTop: 15,
                    marginBottom: 10,
                }}>
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
         </View>
         
         {displayStatus}
         
         <CustomButton onPress={() => handleSignup()} title="Get access" />

         <Text style={{color: 'rgb(80,80,165)',
                              textAlign: 'center'}}>
                    <Text>Already have a user? </Text>
                    <Text style={{fontWeight: 700}}>Log in</Text>
         </Text>

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
     backgroundColor: 'white',
     width: '100%',
     height: '100%',
     padding: 15
 },
});
 
export default Signup;