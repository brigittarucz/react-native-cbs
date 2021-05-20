import React from 'React';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {

    return (
        <TouchableOpacity style={[styles.wrapper, { 
                    backgroundColor: props.btnBgColor === 'white' ? 'white' : 'rgb(80,80,165)',
                    textAlign: props.btnTextType === 'center' ? 'center' : 'left'} ]} onPress={props.onPress}>
                <Text style={[styles.title, { color: props.btnBgColor === 'white' ? '#32305D' : 'white' }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
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

        elevation: 4
    },
    title: { 
        fontSize: 16,
        fontWeight: 700,
    }
});

export default CustomButton;