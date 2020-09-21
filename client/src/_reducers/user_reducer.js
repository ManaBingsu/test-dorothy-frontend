import {
    SIGNIN_USER,
    SIGNUP_USER,
    AUTH_USER
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case SIGNIN_USER:
            return { ...state, res : action.payload }
            break;
        case SIGNUP_USER:
            return { ...state, res: action.payload }
            break;
        case AUTH_USER:
            return { ...state, res: action.payload }
            break;
        default:
            return state;
    }
}