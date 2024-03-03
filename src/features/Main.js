import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsUtil, productMetaMap} from '../api/products'
import { useNavigate } from "react-router-dom";

// const dest = "http://localhost:3001";

export function Main () {
    const navigate = useNavigate();
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        productsUtil('all', dispatch)
    }, [dispatch]);

    return(
        <div className='main-div'>
            <h1>Welcome to the NailRepair hardware store.</h1>
            <h2>All items available at the shop:</h2>
            <div className = 'products'>
                {products.map(productMetaMap(navigate, 'active'))}
            </div>
        </div>
    )
}