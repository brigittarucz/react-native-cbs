import React from 'React';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Home = () => {
    const events = useSelector((state) => state.EventReducer.events)
    console.log(events);

    return (
        <View>
            <Text>Hi, home screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default Home;