import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart-style'>
            <h3>Order Summary: </h3>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;