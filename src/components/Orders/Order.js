import React from 'react';
import useCart from '../../Hooks/useProducts/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import '../Cart/Cart.css'
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-7">

                            {
                                cart.map(product => <ReviewItem key={product.id} product={product}></ReviewItem>)
                            }
                        </div>
                        <div className="col-md-4   bg-info">
                            <Cart key={cart.id} cart={cart}></Cart>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;