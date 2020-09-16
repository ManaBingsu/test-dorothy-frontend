import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER
} from '../_actions/types';


const registerAPI = `https://test-dorothy-backend.herokuapp.com/register`;
//const registerAPI = 'http://localhost:3000/register';

export function registerUser(dataToSubmit) {
    const request = axios.post(registerAPI, (dataToSubmit)).then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}