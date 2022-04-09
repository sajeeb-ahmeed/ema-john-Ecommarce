import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { name, img, price, ratings, seller, id } = props.product
    return (
        <div>

            <Card style={{ width: '21rem', height: '35rem', marginBottom: '20px', marginRight: '45px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body style={{ textAlign: 'start' }}>
                    <Card.Title>{name.slice(0, 20)}</Card.Title>
                    <p className='pb-3'> Price: {price}</p>
                    <p> Manufacturer: {seller}</p>
                    <p> Ratings: {ratings}</p>
                    <Card.Footer >
                        <p onClick={() => props.handdleAddRoCart(props.product)} className='btn btn-outline-light btn-cart ' >Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></p>

                    </Card.Footer>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Product;