import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = () => {
   // if it's in local storage,
   // it's going to pull that out and
   // it's going to fill these fields.
   const cart = useSelector((state) => state.cart)
   const { shippingAddress } = cart
   const navigate = useNavigate()
   const [address, setAddress] = useState(shippingAddress.address)
   const [city, setCity] = useState(shippingAddress.city)
   const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
   const [country, setCountry] = useState(shippingAddress.country)

   const dispatch = useDispatch()

   const submitHandler = (event) => {
      event.preventDefault()
      dispatch(saveShippingAddress({ address, city, postalCode, country }))
      navigate('/payment')
   }

   return (
      <FormContainer>
         <CheckoutSteps step1={true} step2={true} />
         <h1>Shipping</h1>
         <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
               <Form.Label>Address:</Form.Label>
               <Form.Control
                  className='text-center'
                  type='text'
                  placeholder='Enter Address'
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
               ></Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
               <Form.Label>City:</Form.Label>
               <Form.Control
                  className='text-center'
                  type='text'
                  placeholder='Enter City'
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
               ></Form.Control>
            </Form.Group>
            <Form.Group controlId='postalCode'>
               <Form.Label>Postal Code:</Form.Label>
               <Form.Control
                  className='text-center'
                  type='text'
                  placeholder='Enter Postal Code'
                  value={postalCode}
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
               ></Form.Control>
            </Form.Group>
            <Form.Group controlId='country'>
               <Form.Label>Country:</Form.Label>
               <Form.Control
                  className='text-center'
                  type='text'
                  placeholder='Enter Country'
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
               ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
               Continue
            </Button>
         </Form>
      </FormContainer>
   )
}

export default ShippingScreen
