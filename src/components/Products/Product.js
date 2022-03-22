import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, img, price, ratings, seller } = props.product
    return (
        <div>

            <Card style={{ width: '21rem', height: '34rem', marginBottom: '20px', marginRight: '45px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name.slice(0, 17)}</Card.Title>
                    <p> Price: {price}</p>
                    <p> seller: {seller}</p>
                    <p> ratings: {ratings}</p>
                    <Card.Footer className='bg-info text-center'>
                        <small className="text-muted ">Add to Cart</small>
                    </Card.Footer>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Product;