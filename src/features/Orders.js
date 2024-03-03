import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../api/products";

function productMap (redirect){
    return (order) => {
        const products = order.products.map((product) => {
            const handleClick = () => {
                redirect('/product/' + product.product_id)
            }
            const price = Number(product.price.replace('£', '')) * product.quantity;
            return (
                <div className='product' key={product.product_id}>
                    <div className="product-image" onClick={handleClick}><img src="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png" alt=''></img></div>
                    <div className="product-name" onClick={handleClick}>{product.name}</div>
                    <div className="product-desc" onClick={handleClick}>{product.description}</div>
                    <div className="product-price">Price: {product.price}</div>
                    <div>Qty: {' ' + product.quantity + '  '}</div>
                    <div className="product-price">Total price: £{price.toFixed(2)}</div>
                </div>
            )
        })
        return (
            <div key={order.id}>
                <h2>Order id: {order.id}</h2>
                <div className="products">{products}</div>
            </div>
        )
    }
}

export function Orders() {
    const [placedOrders, setPlacedOrders] = useState([]);
    const [despatchedOrders, setDespatchedOrders] = useState([]);
    const [completeOrders, setCompleteOrders] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        getOrders(setPlacedOrders, 'placed');
        getOrders(setDespatchedOrders, 'despatched');
        getOrders(setCompleteOrders, 'completed');
    }, [])

    return(
        <div>
            <h1>Your placed orders:</h1>
            {placedOrders[0] ? placedOrders.map(productMap(navigate)) : 'You have no placed orders'}
            <h1>Your despatched orders:</h1>
            {despatchedOrders[0] ? despatchedOrders.map(productMap(navigate)) : 'You have no despatched orders'}
            <h1>Your completed orders:</h1>
            {completeOrders[0] ? completeOrders.map(productMap(navigate)) : 'You have no completed orders'}
            <br />
        </div>
    )
}