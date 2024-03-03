import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Axios from "axios";
import { modifyCart } from "../api/products";
import { useEffect } from "react";


export function Product () {
    const navigate = useNavigate();
    let {id} = useParams();
    const [product, setProduct] = useState({name: '', description: '', price: 0, id: 0});

    useEffect(() => {
        Axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:3001/product/" + id
        }).then((res) => {
            if(res.data){
                setProduct({
                    name: res.data.name,
                    description: res.data.description,
                    price: res.data.price,
                    id: res.data.id
                });
            } else {
                navigate('/');
            }
        })
    }, [navigate, id]);

    return (
        <div>
            <h1>Showing product {product.id}</h1>
            <div className="product-image" ><img src="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png" alt=''></img></div>
            <div className="product-name" >{product.name}</div>
            <div>{product.description}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-add-to-cart"><button onClick={() => modifyCart(product.id, 1, navigate)}>Add to cart</button></div>
        </div>
    )
}