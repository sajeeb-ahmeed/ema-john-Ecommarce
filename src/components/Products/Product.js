import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, img, price, ratings, seller } = props.product
    return (
        <div>

            <Card style={{ width: '21rem', height: '35rem', marginBottom: '20px', marginRight: '45px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body style={{ textAlign: 'start' }}>
                    <Card.Title>{name.slice(0, 20)}</Card.Title>
                    <p className='pb-3'> Price: {price}</p>
                    <p> Manufacturer: {seller}</p>
                    <p> Ratings: {ratings}</p>
                    <Card.Footer className='bg-info text-center btn-fotter' style={{ width: '100%' }}>
                        <small className="text-muted fw-bold ">Add to Cart</small>
                    </Card.Footer>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Product;