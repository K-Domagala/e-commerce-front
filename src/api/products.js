import Axios from "axios"

export function productsUtil (category, dispatch) {
    const updateProducts = (res) => {
        dispatch({
            type: 'PRODUCTS',
            payload: res.data
        })
    }

    if(category === 'all'){
        Axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:3001/product"
        }).then(updateProducts)
    } else {
        Axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:3001/product?category=" + category
        }).then(updateProducts)
    }
}

export function getCart (setCart, setTotal, redirect){
    Axios({
        method: 'GET',
        withCredentials: true,
        url: "http://localhost:3001/cart/cart"
    }).then(res => {
        if(res.data.message === 'User not logged in'){
            redirect('/login');
        }
        let runningTotal = 0
        res.data.forEach(element => {
            runningTotal += (Number(element.price.replace('£', '')) * element.quantity)
        });
        setCart(res.data);
        setTotal(runningTotal);
    })
}

export function getOrders (setOrders, status) {
    Axios({
        method: 'GET',
        withCredentials: true,
        url: "http://localhost:3001/orders?status=" + status
    }).then(res => {
        let orders = []
        for(let product of res.data){
            if(orders[orders.length - 1]?.id !== product.id){
                orders.push({id: product.id});
                orders[orders.length - 1].products = [];
            }
            orders[orders.length - 1].products.push(product)
        }
        setOrders(orders);
    })
}

export function modifyCart (id, qty, redirect, setCart, setTotal) {
    Axios({
        method: 'POST',
        withCredentials: true,
        data: {productId: id, qty: qty},
        url: "http://localhost:3001/cart"
    }).then((res) => {
        if(res.data.message === 'User not logged in'){
            redirect('/login');
        }
        if(setCart){
            getCart(setCart, setTotal);
        }
    })
}

export const productMetaMap = (redirect, status, setCart, setTotal) => {
    const rest = (product) => {
        if(status === 'active'){
            return <div className="product-add-to-cart"><button onClick={() => modifyCart(product.id, 1, redirect)}>Add to cart</button></div>
        } else if(status === 'cart'){
            const price = Number(product.price.replace('£', '')) * product.quantity;
            const handleQty = (qty) => {
                modifyCart(product.id, qty, redirect, setCart, setTotal)
            }
            return (
            <div>
                <div>Qty: {}
                    <button onClick={() => handleQty(product.quantity - 1)}>-</button>
                    {' ' + product.quantity + '  '}
                    <button onClick={() => handleQty(product.quantity + 1)}>+</button>
                </div>
                <div>Product id: {product.id}</div>
                <div className="product-price">Total price: £{price.toFixed(2)}</div>
            </div>
            )
        } else {
            const price = Number(product.price.replace('£', '')) * product.quantity;
            return (
                <div>
                    <div>Qty: {' ' + product.quantity + '  '}</div>
                    <div className="product-price">Total price: £{price.toFixed(2)}</div>
                </div>
            )
        }
    }

    return (product) => {
        if(status == 'cart'){
            product.id = product.product_id;
        }
        const handleClick = () => {
            redirect('../product/' + product.id)
        }
        return (
        <div key={product.id}>
            <div className='product'>
                <div className="product-image" onClick={handleClick}><img src="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png" alt=''></img></div>
                <div className="product-name" onClick={handleClick}>{product.name}</div>
                <div className="product-desc" onClick={handleClick}>{product.description}</div>
                <div className="product-price">Price: {product.price}</div>
                {rest(product)}
            </div>
        </div>)
    }
}

export function stripeTokenHandler(token) {
    const paymentData = {token: token.id};
  
    // Use fetch to send the token ID and any other payment data to your server.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    Axios({
      method: 'POST',
      withCredentials: true,
      data: JSON.stringify(paymentData),
      url: 'http://localhost:3001/cart/checkout'
    }).then((res) => res.json);
  }