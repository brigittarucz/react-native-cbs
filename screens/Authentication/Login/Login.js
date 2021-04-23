import React from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../../store/actions/UserActions';
import { USERS } from '../../../data/dummy-data';
import { useState } from 'react';
import Input from '../../../components/UI/Input';

const Login = props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState('brigitta12345@yahoo.com');
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('password123');
    const [passwordValid, setPasswordValid] = useState(false);
    const state = useSelector((state) => state);

    const [displayStatus, setDisplayStatus] = useState();

    const loginHandler = () => {
        setIsLoading(true);
        console.log(isLoading)
        if(email.length >= 10 && password.length >= 7) {
            setTimeout(() => {
                dispatch(userActions.logUserIn(email, password))
                    .catch(res => {
                        console.log(res);
                        setDisplayStatus(<Text>Invalid credentials!</Text>)
                    })
                    setIsLoading(false);
                }, 1000)
        } else if (email.length < 10) {
            setDisplayStatus(<Text>Invalid email!</Text>)
            setIsLoading(false);
        } else if (password.length <= 6) {
            setDisplayStatus(<Text>Invalid credentials!</Text>)
            setIsLoading(false);
        }
    }

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

            <Button onPress={() => loginHandler()} title="Login!"/>
            {displayStatus}
            {isLoading && <ActivityIndicator size="large" color="#0000ff"  />}
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

export default Login;