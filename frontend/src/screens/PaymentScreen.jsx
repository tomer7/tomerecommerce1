import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'

const PaymentScreen = () => {
   // if it's in local storage,
   // it's going to pull that out and
   // it's going to fill these fields.
   const cart = useSelector((state) => state.cart)
   const { shippingAddress } = cart
   const navigate = useNavigate()
   if (!shippingAddress) {
      navigate('/login/shipping')
   }

   const [paymentMethod, setPaymentMethod] = useState('PayPal')

   const dispatch = useDispatch()

   const submitHandler = (event) => {
      event.preventDefault()
      dispatch(savePaymentMethod(paymentMethod))
      navigate('/placeorder')
   }

   return (
      <FormContainer>
         <CheckoutSteps step1={true} step2={true} step3={true} />
         <h1>Payment Method</h1>
         <Form onSubmit={submitHandler}>
            <Form.Group>
               <Form.Label as='legend'>Select Method</Form.Label>
               <Col>
                  <Form.Check
                     type='radio'
                     label='PayPal'
                     id='PayPal'
                     name='paymentMethod'
                     value='PayPal'
                     checked
                     onChange={(e) => {
                        setPaymentMethod(e.target.value)
                     }}
                  ></Form.Check>
                  <Form.Check
                     type='radio'
                     label='Credit Card'
                     id='creditCard'
                     name='paymentMethod'
                     value='creditCard'
                     onChange={(e) => {
                        setPaymentMethod(e.target.value)
                     }}
                  ></Form.Check>
               </Col>
            </Form.Group>
            <Button type='submit' variant='primary'>
               Continue
            </Button>
         </Form>
      </FormContainer>
   )
}

export default PaymentScreen
