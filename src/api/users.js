import Axios from 'axios';

export const logIn = (email, password, dispatch) => {
    Axios({
        method: 'POST',
        data: {
            username: email,
            password: password,
        },
        withCredentials: true,
        url: "http://localhost:3001/login"
    }).then((res) => {
        if(res.data.email){
            console.log(res.data.email)
            dispatch({
                type: 'LOG_IN',
                payload: res.data.email
            })
        } else {
            console.log(res.data.message)
        }
    })
}

export const logOut = (dispatch) => {
    Axios({
        method: 'POST',
        data: {},
        withCredentials: true,
        url: "http://localhost:3001/logout"
    }).then((res) => {
        if(res.data.message === 'success'){
            dispatch({
                type: 'LOG_OUT',
            })
        }
    })
}

export const fetchUser = (setUser, redirect) => {
    Axios({
        method: 'GET',
        data: {},
        withCredentials: true,
        url: "http://localhost:3001/users"
    }).then((res) => {
        console.log(res.data.message)
        if(res.data.redirect){
            redirect('/login')
        }
        setUser(res.data);
    })
}

export const updateUser = (input, setMessage) => {
    let firstName = input.first_name.value;
    let lastName = input.last_name.value;
    let email = input.email.value;
    let address1 = input.address_1.value;
    let address2 = input.address_2.value;
    let address3 = input.address_3.value;
    let postcode = input.postcode.value;
    let phoneNumber = input.phone_number.value;
    let user = {firstName, lastName, email, address1, address2, address3, postcode, phoneNumber}
    Axios({
        method: 'POST',
        data: user,
        withCredentials: true,
        url: "http://localhost:3001/users"
    }).then((res) => {
        setMessage(res.data.message)
    })
}

export const updatePassword = (input, setPasswordMessage) => {
    Axios({
        method: 'POST',
        data: {input},
        withCredentials: true,
        url: "http://localhost:3001/users/password"
    }).then((res) => {
        setPasswordMessage(res.data.message);
    })
}