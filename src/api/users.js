import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useDispatch } from "react-redux";

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
    dispatch({
        type: 'LOG_OUT'
    })
}