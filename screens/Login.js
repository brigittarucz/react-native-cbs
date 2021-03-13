import React from 'React';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import userActions from '../store/actions/UserActions';
import { USERS } from '../data/dummy-data';

const Login = props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    
    const loginHandler = () => {
        dispatch(userActions.logUserIn({user: USERS[0]}));
        navigation.navigate('Chat');
    }

    return (
        <View>
            <Text>Hi, from login screen!</Text>
            <Button onPress={() => loginHandler()} title="Login!"/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Login;