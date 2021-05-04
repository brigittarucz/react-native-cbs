import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';

import { useDispatch } from 'react-redux';
import userActions from '../../../store/actions/UserActions';
import chatActions from '../../../store/actions/ChatActions';

import Input from '../../../components/UI/Input';
import eventActions from '../../../store/actions/EventActions';

import CustomButton from '../../../components/UI/Button';

import logo from '../../../assets/logo.png';

const Login = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState('brigitta12345@yahoo.com');
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('password123');
    const [passwordValid, setPasswordValid] = useState(false);

    const [displayStatus, setDisplayStatus] = useState();

    const loginHandler = () => {
        setIsLoading(true);
        console.log(isLoading)
        if(email.length >= 10 && password.length >= 7) {
            setTimeout(() => {
                dispatch(userActions.logUserIn(email, password))
                    .then(res => {
                        dispatch(chatActions.setChatRooms(res))
                            .then(() => {
                                dispatch(eventActions.setUserEvents())
                                .catch(error => { console.log(error)})
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    })
                    .catch(error => {
                        console.log(error);
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
        <View style={styles.mainContainer}>
            <View style={{marginTop: 15, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={logo} style={{width: 140, height: 140}} />
            </View>
            <View style={styles.container}>

                <Text style={{color: 'rgb(50,48,93)', 
                            fontSize: 22,
                            fontWeight: 700,
                            fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'}}>Log In</Text>

                <View style={{
                    marginTop: 20,
                    marginBottom: 20,
                }}>

                <Input label="Email"
                error="Please fill out your email" value={email}
                text={email} nameValid={emailValid}
                onValid={valid => setEmailValid(valid)}
                setContent={content => setEmail(content)}/>

                <Input label="Password"
                error="Please fill out your password" value={password}
                text={password} nameValid={passwordValid}
                onValid={valid => setPasswordValid(valid)}
                setContent={content => setPassword(content)}/>

                </View>

               
                <Text style={{color: 'rgb(80,80,165)', 
                            fontSize: 14,
                            textAlign: 'center',
                            fontWeight: 700,
                            fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'}}>Forgot password?</Text>

                <CustomButton onPress={() => loginHandler()} title="Log In" />

                <Text style={{color: 'rgb(80,80,165)',
                              textAlign: 'center'}}>
                    <Text>Don't have an account? </Text>
                    <Text style={{fontWeight: 700}}>Sign up</Text>
                </Text>

                {displayStatus}
                {isLoading && <ActivityIndicator size="large" color="#0000ff"  />}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    mainContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
});

export default Login;