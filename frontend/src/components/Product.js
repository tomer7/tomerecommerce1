import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

// We make destructuring
// taking out the product from props
// and call it as a variable product

const Product = ({ product }) => {
   return (
      <Card className='my-3 p-3 rounded'>
         <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
         </Link>

         <Card.Body>
            <Link to={`/product/${product._id}`}>
               <Card.Title as='div'>
                  <strong>{product.name}</strong>
               </Card.Title>
            </Link>

            {/* num reviews of product */}
            {/* <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}
            <Card.Text as='h3'>${product.price}</Card.Text>
         </Card.Body>
      </Card>
   )
}

export default Product
