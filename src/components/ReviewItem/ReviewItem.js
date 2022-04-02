import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props;
    const { name, img, price, shipping, quantity } = props.product
    return (
        <div>
            <div className='container '>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between py-2 mb-3 bg-info">
                        <div className='d-flex mr-1 justify-content-center align-items-center'>
                            <div className=''>
                                <img className='me-4 rounded ' src={img} style={{ width: '80px', height: '80px' }} alt="" />
                            </div>
                            <div>
                                <h5> {name}</h5>
                                <p>Price : ${price}</p>
                                <p>Shipping:{shipping}</p>
                                <p> Quantity: {quantity}</p>
                            </div>

                        </div>
                        <div>
                            <span onClick={() => handleRemoveProduct(product)}>

                                <FontAwesomeIcon className='p-3 cursor-pointer btn-outline-danger' icon={faTrashAlt} />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;