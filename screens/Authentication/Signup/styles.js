import { StyleSheet } from 'react-native';

const signupStyles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      padding: 15
    },
    logoContainer: {
       display: 'flex', 
       alignItems: 'center', 
       justifyContent: 'center'
    },
    alreadyUserText: {
       color: 'rgb(80,80,165)',
       textAlign: 'center'
    }
 });

export { signupStyles };