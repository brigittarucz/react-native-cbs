import React from 'React';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../../store/actions/UserActions';
import { USERS } from '../../../data/dummy-data';
import { useState } from 'react';

const Login = props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const loginHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            dispatch(userActions.logUserIn({user: USERS[3]}));
            setIsLoading(false);
            // navigation.navigate('Chat');
        }, 1000)
    }

    return (
        <View>
            <Text>Hi, from login screen!</Text>
            <Button onPress={() => loginHandler()} title="Login!"/>
            {isLoading && <ActivityIndicator size="large" color="#0000ff"  />}
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Login;