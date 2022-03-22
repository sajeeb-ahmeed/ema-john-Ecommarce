
import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //EVENT HANDDLEER
    const handdleAddRoCart = (product) => {
        console.log('clicked', product);
    }
    return (
        <div className='shop container mt-5'>
            <div className="shop-products">
                {
                    products.map(product => <Product key={product.id} product={product} handdleAddRoCart={handdleAddRoCart}></Product>)
                }
            </div>
            <div className="order-details">
                <h4>this is order details</h4>
            </div>
        </div>
    );
};

export default Shop;