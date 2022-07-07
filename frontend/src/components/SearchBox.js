import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const SearchBox = () => {
   const navigate = useNavigate()
   const [keyword, setKeyword] = useState('')

   const submitHandler = (e) => {
      e.preventDefault()
      if (keyword.trim()) {
         navigate(`/search/${keyword}`)
      } else {
         navigate('/')
      }
   }

   return (
      <Form
         style={{
            display: 'flex',
            flexDirection: 'row'
         }}
         onSubmit={submitHandler}
         inline
      >
         <Form.Control
            style={{
               marginRight: '5px',
               borderRadius: '50px'
            }}
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
         ></Form.Control>

         <Button
            style={{
               borderRadius: '50px'
            }}
            type='submit'
            variant='dark'
            className='p-2'
         >
            Search
         </Button>
      </Form>
   )
}

export default SearchBox
