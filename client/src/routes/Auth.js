import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signupUser } from '../_actions/user_action';
import { signinUser } from '../_actions/user_action';
import { authUser } from '../_actions/user_action';
import axios from 'axios';

const Auth = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
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
            signup()
        } else {
            // log in
            signin()
        }
    };
    const onAuthSubmit = (event) => {
        event.preventDefault();
        authusersubmit()
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
        <form onSubmit={onAuthSubmit}>
            <input type="submit" value={"Auth"}/>
        </form>
        </div>
    )
    function authusersubmit()
    {
        var token = getCookie('accesstoken')
        dispatch(authUser(token))
        .then(response => {
            if (response.payload.success) {
                alert("Success to auth")
            } else {
                alert("Failed to auth")
            }
        })
    }

    function signup()
    {
        let body = {
            email: email,
            password: password,
            name : name
        }
        dispatch(signupUser(body))
        .then(response => {
            if (response.payload.accesstoken) {
                alert("Success to sign up")
            } else {
                alert("Failed to sign up")
            }
        })
    }

    function signin()
    {
        let body = {
            email: email,
            password: password
        }
        dispatch(signinUser(body))
        .then(response => {
            if (response.payload.accesstoken) {
                alert("Success to sign in")
                setCookie('accesstoken', response.payload.accesstoken, 1)
                console.log(getCookie('accesstoken'))
            } else {
                alert("Failed to sign in")
            }
        })
    }

    function setCookie(cookie_name, value, days) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + days);
        // 설정 일수만큼 현재시간에 만료값으로 지정
      
        var cookie_value = escape(value) + ((days == null) ? '' : ';    expires=' + exdate.toUTCString());
        document.cookie = cookie_name + '=' + cookie_value;
    }

    function getCookie(cookie_name) {
        var x, y;
        var cook = document.cookie + ";"
        var val = cook.split(';');
      
        for (var i = 0; i < val.length; i++) {
          x = val[i].substr(0, val[i].indexOf('='));
          y = val[i].substr(val[i].indexOf('=') + 1);
          x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기

          if (x == cookie_name) {
            return unescape(y); // unescape로 디코딩 후 값 리턴
          }
        }
      }
}

export default Auth;
