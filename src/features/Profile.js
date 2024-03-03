import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../api/users"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUser, updateUser, updatePassword } from "../api/users";

export function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [user, setUser] = useState({email: '', first_name: '', last_name: '', address_1: '', address_2: '', address_3: '', postcode: '', phone_number: ''});
    useEffect(() => {
        fetchUser(setUser, navigate)
    }, [navigate])
    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(event.target, setMessage)
    }
    const handlePasswordSubmit = (event) => {
        event.preventDefault();
        updatePassword(event.target.password.value, setPasswordMessage)
    }
    return(
        <div>
            <h1>Profile page</h1><br />
            <NavLink to="/orders"><button>Order History</button></NavLink>
            <button onClick={() => logOut(dispatch)}>Log Out</button>
            <h2>User details:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email' required defaultValue={user.email}/>
                </div>
                <div>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' id='first_name' name='first_name' required defaultValue={user.first_name}/>
                </div>
                <div>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' id='last_name' name='last_name' required defaultValue={user.last_name}/>
                </div>
                <div>
                    <label htmlFor='address_1'>Address 1</label>
                    <input type='text' id='address_1' name='address_1' required defaultValue={user.address_1}/>
                </div>
                <div>
                    <label htmlFor='address_2'>Address 2</label>
                    <input type='text' id='address_2' name='address_2' defaultValue={user.address_2}/>
                </div>
                <div>
                    <label htmlFor='address_3'>Address 3</label>
                    <input type='text' id='address_3' name='address_3' defaultValue={user.address_3}/>
                </div>
                <div>
                    <label htmlFor='postcode'>Postcode</label>
                    <input type='text' id='postcode' name='postcode' required defaultValue={user.postcode}/>
                </div>
                <div>
                    <label htmlFor='phone_number'>Phone number</label>
                    <input type='text' id='phone_number' name='phone_number' required defaultValue={user.phone_number}/>
                </div>
                <input type="submit" value="Submit" />
                {message}
            </form>
            <h2>Set new password:</h2>
            <form onSubmit={handlePasswordSubmit}>
                <div>
                    <label htmlFor='password'>New password</label>
                    <input type='password' id='password' name='password' required></input>
                </div>
                <input type="submit" value="Set new password" />
                {passwordMessage}
            </form>
        </div>
    )
}