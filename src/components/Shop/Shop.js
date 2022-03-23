
import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //EVENT HANDDLEER
    const handdleAddRoCart = (product) => {
        console.log('clicked', product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop container mt-5'>
            <div className="shop-products">
                {
                    products.map(product => <Product key={product.id} product={product} handdleAddRoCart={handdleAddRoCart}></Product>)
                }
            </div>
            <div className="order-details">
                <h5 className='text-center'>Order Summary</h5>
                <p> Selected Items:  {cart.length}</p>
                <p> Total Price:  {cart.length}</p>
                <p> Total Shipping Charge:  {cart.length}</p>
                <p> Tax:  {cart.length}</p>
                <h6> Grand Total:  {cart.length}</h6>
                <br />
                <button>Clear Cart</button> <br /> <br />
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;