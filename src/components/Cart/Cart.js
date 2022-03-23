import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    return (
        <div className='cart-style'>
            <h3>Order Summary: </h3>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: </h3>
        </div>
    );
};

export default Cart;