import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart, productMetaMap, stripeTokenHandler } from "../api/products";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

export function Cart () {
    const [cart, setCart] = useState([{id: 0, name: '', description: '', price: '£0', quantity: 0}]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    useEffect( () => {
        getCart(setCart, setTotal, navigate)
    }, [])

    const stripe = useStripe();
    const elements = useElements();

    const handleClick = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make  sure to disable form submission until Stripe.js has loaded.
        return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
        // Show error to your customer.
        console.log(result.error.message);
        } else {
        // Send the token to your server.
        // This function does not exist yet; we will define it in the next step.
        stripeTokenHandler(result.token);
        }
    };

    return (
        <div className='main-div'>
            <h1>Here is what is in your cart:</h1>
            <div className = 'products'>
                {cart.map(productMetaMap(navigate, 'cart', setCart, setTotal))}
            </div>
            <h2>Total: £{total.toFixed(2)}</h2>
            <button onClick={handleClick}>Checkout</button>
        </div>
    )
}