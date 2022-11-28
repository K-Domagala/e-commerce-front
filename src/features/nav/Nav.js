import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export function Nav () {
    const username = useSelector(state => state.username)

    return(
        <div><header><nav>
            <h1><NavLink to='/'>NailRepair</NavLink></h1>
            <input type='textbox' defaultValue='Search...'></input>
            <ul>
                {username ? 
                    <li><NavLink to="/profile">Welcome {username}</NavLink></li> : 
                    <li><NavLink to="/login">Log In</NavLink></li>}
                <li><NavLink to="/register">Sign Up</NavLink></li>
            </ul>
        </nav></header></div>
    )
}