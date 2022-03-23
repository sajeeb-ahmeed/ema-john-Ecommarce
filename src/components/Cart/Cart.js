import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    let tax = +(total * 0.1).toFixed(2);

    let grandTotal = (total + shipping + tax)
    return (
        <div className='cart'>
            <h3 className='text-center mb-5'>Order Summary</h3>
            <h6> Selected Items:  {cart.length}</h6>
            <h6> Total Price: $ {total}</h6>
            <h6> Total Shipping Charge: $ {shipping}</h6>
            <h6> Tax: $ {tax}</h6>
            <h6> Grand Total: $ {grandTotal}</h6>
            <br />
            <button className='btn btn-outline-dark'>Clear Cart</button> <br /> <br />
            <button className='btn btn-outline-dark'>Review Order</button>
        </div>
    );
};

export default Cart;