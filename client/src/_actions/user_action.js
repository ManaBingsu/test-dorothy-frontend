import axios from 'axios';
import {
    SIGNIN_USER,
    SIGNUP_USER,
    AUTH_USER
} from '../_actions/types';


const signupAPI = `https://test-dorothy-backend.herokuapp.com/signup`;
//const signinAPI = `https://test-dorothy-backend.herokuapp.com/signin`;
//const signoutAPI = `https://test-dorothy-backend.herokuapp.com/signout`;
//const registerAPI = 'http://localhost:3000/register';
const signinAPI = 'http://localhost:3000/signin'
const userauthAPI = 'http://localhost:3000/userauth'

export function signupUser(dataToSubmit) {
    const request = axios.post(signupAPI, (dataToSubmit)).then(response => response.data)

    return {
        type: SIGNUP_USER,
        payload: request
    }
}

export function signinUser(dataToSubmit) {
    const request = axios.post(signinAPI, (dataToSubmit)).then(response => response.data)

    return {
        type: SIGNIN_USER,
        payload: request
    }
}

export function authUser(dataToSubmit) {
    let config = {
        headers: {
          accesstoken: dataToSubmit
        }
      }
    const request = axios.post(userauthAPI, (dataToSubmit), config).then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}
