import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/user_action';
import axios from 'axios';

//const registerAPI = `https://test-dorothy-backend.herokuapp.com/register`;
const registerAPI = 'http://localhost:3000/register';

const Auth = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email"){
            setEmail(value)
        } else if(name === "name"){
            setName(value);
        } else if(name === "password"){
            setPassword(value);
        }
    };
    // 기본 행위가 실행되는 것을 원치 않음
    const onSubmit = (event) => {
        event.preventDefault();
        if (newAccount) {
            // create account
            Register()
        } else {
            // log in
        }
    };
    return (
        <div>
        <form onSubmit={onSubmit}>
            <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                required value={email} 
                onChange={onChange}
                />
            <input 
                name="name" 
                type="text" 
                placeholder="Name" 
                required value={name} 
                onChange={onChange}
                />
            <input 
                name="password"
                type="password" 
                placeholder="Password" 
                required value={password} 
                onChange={onChange}
                />
            <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
        </form>
        </div> 
    )

    function Register()
    {
        let body = {
            email: email,
            password: password,
            name : name
        }
        dispatch(registerUser(body))
        .then(response => {
            if (response.payload.success) {
                alert("Success to sign up")
            } else {
                alert("Failed to sign up")
            }
        })
    }
}

export default Auth;