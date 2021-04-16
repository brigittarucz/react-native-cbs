import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

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
      <View>
          <Text>{props.label}</Text>
          <TextInput value={props.username} 
            style={styles.input}
            onChangeText={props.handleNewInput ? props.handleNewInput : handleNewInput}
            onBlur={() => setTouched(true)}></TextInput>
            {!props.nameValid && touched && <Text>{props.error}</Text>}
      </View>
   );
}

export default Input;

const styles = StyleSheet.create({
   input: {
     width: 150,
     height: 40,
     margin: 12,
     borderWidth: 1,
   },
 });