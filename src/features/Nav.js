import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Categories } from "./Categories";

export function Nav () {
    const username = useSelector(state => state.username)

    const user = () => {
        if(username){
            return (
                <li>Welcome {username}</li>
            )
        }
    }

    const loggedIn = () => {
        if(username){
            return <li><button><NavLink to="/profile">Profile</NavLink></button></li>
        } else {
            return <li><button><NavLink to="/login">Log In</NavLink></button></li>
        }
    }

    const cart = () => {
        if(username){
            return <li><button>Cart</button></li>
        } else {
            return <li><button><NavLink to="/register">Sign Up</NavLink></button></li>
        }
    }

    return(
        <div>
            <header>
                <nav>
                    <h1><NavLink to='/'>NailRepair</NavLink></h1>
                    <input type='textbox' defaultValue='Search...'></input>
                    <ul>
                        {user()}
                        {loggedIn()}
                        {cart()}
                    </ul>
                </nav>
            </header>
            <div>
                <Categories />
            </div>
        </div>
    )
}