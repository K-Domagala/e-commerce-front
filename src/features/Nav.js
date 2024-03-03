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
            return <li><NavLink to="/profile"><button>Profile</button></NavLink></li>
        } else {
            return <li><NavLink to="/login"><button>Log In</button></NavLink></li>
        }
    }

    const cart = () => {
        if(username){
            return <li><NavLink to="/cart"><button>Cart</button></NavLink></li>
        } else {
            return <li><NavLink to="/register"><button>Sign Up</button></NavLink></li>
        }
    }

    

    return(
        <div>
            <header>
                <nav>
                    <h1><NavLink to='/'>NailRepair</NavLink></h1>
                    <input type='textbox' placeholder='Search...' id='search-box'></input>
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