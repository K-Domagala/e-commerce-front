import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../api/users";

export function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Welcome to the login page.</h1>
            <div>
                <label htmlFor='email'>Email</label>
                <input 
                    type='text' id='email' name='email' required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    type='password' id='password' name='password' required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={() => logIn(email, password, dispatch)}>Log in</button>
        </div>
    )
}