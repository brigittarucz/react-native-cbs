import { SET_USER_SESSION, 
         LOG_USER_OUT, 
         LOG_USER_IN, 
         SAVE_USER, 
         SIGN_USER_UP, 
         CHANGE_PASSWORD } from '../constants/ConstantsActions';

import PrivateUser from '../../models/PrivateUser';
import UserReducer from '../reducers/UserReducers';

const logUserIn = (email, password) => {

    // Email: brigitta1@yahoo.com
    // Password: password123

    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdwdVRkCY3OH-us9FgECuq1mKTCdZSLuw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:  email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        const data = await response.json(); // json to javascript
        
        if (!response.ok) {
            console.log(data);
            throw new Error("Could not log in");
        } else {
            var token = data.idToken;

            const response = await fetch(
                'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=' + token, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            var users = await response.json();
            var usersKeys = Object.keys(users)

            for (var key of usersKeys) {
                if(users[key].email === email) {
                    var user = new PrivateUser(users[key].id, 
                                               users[key].name,
                                               users[key].email,
                                               users[key].password,
                                               users[key].image,
                                               users[key].title,
                                               users[key].chatNotification,
                                               users[key].additionalPublicIdentity)
                        
                    dispatch({type: LOG_USER_IN, payload: {user: user, idToken: data.idToken } });
                }
            }
            
            // TODO: Handle case no match found

        }
    }

    // return {
    //     type: LOG_USER_IN,
    //     payload: user
    // }
}

const changePassword = (userSession) => {
    return {
        type: CHANGE_PASSWORD,
        payload: userSession
    }
}

const signUserUp = (name, email, password) => {
    // Getting started: authentication > get started > proj overview > proj settings > web API key
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdwdVRkCY3OH-us9FgECuq1mKTCdZSLuw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // Should be able to send a request to Firebase to save a new user
            // and save the returned token and user info in the Redux store
            body: JSON.stringify({ 
                name: name,
                email: email,
                password: password,
                returnSecureToken: true
            })
        });
  
        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            throw new Error('Could not sign up');
        } else {
            var token = data.idToken;
            var id = data.localId;

            // Save other user data in DB

            const response = await fetch(
                'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=' + token, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: id,
                        name: name,
                        email: email,
                        image: 'https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png',
                        title: '',
                        chatNotification: false,
                        additionalPublicIdentity: 0
                    })
                }
            )

            if (!response.ok) {
                throw new Error('Could not save additional user data')
            } else {
                dispatch({type: SIGN_USER_UP, payload: data });
            }

        }
    };

    // return {
    //     type: SIGN_USER_UP,
    //     payload: userSession
    // }
}

const setUserSession = (userSession) => {
    return {
        type: SET_USER_SESSION,
        payload: userSession
    }
}

const saveUser = (userSession) => {
    return {
        type: SAVE_USER,
        payload: userSession
    }
}

const logUserOut = () => {
    return {
        type: LOG_USER_OUT
    }
}


export default {
    setUserSession,
    logUserOut,
    logUserIn,
    saveUser,
    signUserUp,
    changePassword,
    // isLoading
}