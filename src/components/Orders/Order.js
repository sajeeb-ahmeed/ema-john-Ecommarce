import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useProducts/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import '../Cart/Cart.css'
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-7">

                            {
                                cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                            }
                        </div>
                        <div className="col-md-4   bg-info">
                            <Cart key={cart.id} cart={cart}>
                                <Link to='/shop'>
                                    <p className='btn btn-outline-dark'>Proceed Review</p>
                                </Link>
                            </Cart>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;