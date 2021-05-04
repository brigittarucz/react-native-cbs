import React from 'React';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {

    return (
        <TouchableOpacity style={{
                backgroundColor: 'rgb(80,80,165)', 
                padding: 15,
                borderRadius: 5,
                marginTop: 25,
                marginBottom: 25,
                shadowColor: "#000",
                shadowOffset: {
                   width: 0,
                   height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
       
                elevation: 4,
            }} onPress={props.onPress}>
                <Text style={{ 
                color: 'white',
                fontSize: 18,
                fontWeight: 600,}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

});

export default CustomButton;