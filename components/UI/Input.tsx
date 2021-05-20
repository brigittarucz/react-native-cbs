import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Platform } from 'react-native';

interface Props {
   label: string;
   text: string;
   error: string;
   nameValid: boolean;
   onValid(arg: boolean): void;
   setContent: (arg: string) => {}
}


const Input = (props: Props) => {
   
   // const [changeName, setChangeName] = useState(props.value); // lift up
   // const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
   // const [touched, setTouched] = useState(false);
    
   //  const value = props.value;
    const [touched, setTouched] = useState(false);

   //  const handleNewInput = (enteredText) => {
   //      setTouched(true);
   //      enteredText === '' ? setNameValid(false) : setNameValid(true);
   //      setChangeName(enteredText);
   //  };

   const handleNewInput = (enteredText: string) => {
      setTouched(true);
      enteredText === '' ? props.onValid(false) : props.onValid(true);
      props.setContent(enteredText);
  };

   return (
      <View style={styles.wrapper}>
          <Text style={styles.title}>{props.label}</Text>
          <TextInput value={props.value} 
            style={styles.input}
            onChangeText={props.handleNewInput ? props.handleNewInput : handleNewInput}
            onBlur={() => setTouched(true)}></TextInput>
            {!props.nameValid && touched && <Text>{props.error}</Text>}
      </View>
   );
}

export default Input;

const styles = StyleSheet.create({
   wrapper: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
      padding: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(240,240,240)',
      marginTop: -2,
      backgroundColor: 'white'
   },
   input: {
     width: '100%',
     height: 40,
     fontSize: 16,
     color: 'rgb(50,48,93)'
   },
   title: {
      color: 'rgb(50,48,93)', 
      textTransform: 'uppercase', 
      fontWeight: 700,
      fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'
   }
 });