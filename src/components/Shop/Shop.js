
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;