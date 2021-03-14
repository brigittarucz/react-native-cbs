import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = props => {
    // const value = props.value;
    // const [changeName, setChangeName] = useState(props.value); // lift up
    // const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
    // const [touched, setTouched] = useState(false);
    const [touched, setTouched] = useState(false);
    // const handleNewInput = (enteredText) => {
    //     setTouched(true);
    //     enteredText === '' ? setNameValid(false) : setNameValid(true);
    //     setChangeName(enteredText);
    // };

   return (
      <View>
          <Text>{props.label}</Text>
          <TextInput value={props.username} 
            onChangeText={props.handleNewInput}
            onBlur={() => setTouched(true)}></TextInput>
            {!props.nameValid && touched && <Text>{props.error}</Text>}
      </View>
   );
}

export default Input;