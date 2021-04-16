import { SET_USER_SESSION, 
         LOG_USER_OUT, 
         LOG_USER_IN, 
         SAVE_USER, 
         SIGN_USER_UP, 
         CHANGE_PASSWORD } from '../constants/ConstantsActions';

const logUserIn = (user) => {
    // console.log("worked")
    // email: brigitta1@yahoo.com
    // password: password123
    console.log(user);
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdwdVRkCY3OH-us9FgECuq1mKTCdZSLuw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'brig@yahoo.com',
                    password: 'mypassword123',
                    // password: user.user.password,
                    returnSecureToken: true
                })
            }
        )

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {
            dispatch({type: LOG_USER_IN, payload: data });
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
    // return {
    //     type: SIGN_USER_UP,
    //     payload: userSession
    // }
    // Authentication > get started
    // Project overview > project settings > web API key
    return async dispatch => {
        const response = await fetch(
            // 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdwdVRkCY3OH-us9FgECuq1mKTCdZSLuw', {
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
            //There was a problem..
        } else {
            dispatch({type: SIGN_USER_UP, payload: data });
            console.log(email);
        }
    };
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