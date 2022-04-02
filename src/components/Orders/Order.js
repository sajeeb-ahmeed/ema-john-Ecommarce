import React from 'react';
import useCart from '../../Hooks/useProducts/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <h1>This is order Component {products.length}</h1>
            <p>Cart has {cart.length}</p>
        </div>
    );
};

export default Order;