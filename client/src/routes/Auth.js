import React, { useState } from "react";
import axios from 'axios';

const registerAPI = `https://test-dorothy-backend.herokuapp.com/register`;

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email"){
            setEmail(value)
        } else if(name === "password"){
            setPassword(value);
        }
    };
    // 기본 행위가 실행되는 것을 원치 않음
    const onSubmit = (event) => {
        event.preventDefault();
        if (newAccount) {
            // create account
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
}

function Register()
{
    let body = {
        email: Email,
        password: Password,
        name: Name
    }
    axios.get(registerAPI)
    .then(response => console.log(response.data))
}

export default Auth;