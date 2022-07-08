import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
   const params = useParams()
   const keyword = params.keyword
   const pageNumber = params.pageNumber || 1
   const dispatch = useDispatch()

   const productList = useSelector((state) => state.productList)
   const { loading, error, products, page, pages } = productList

   useEffect(() => {
      // const fetchProducts = async () => {
      //   const res = await axios.get('/api/products')
      //   setProducts(res.data)
      // }
      // fetchProducts()

      dispatch(listProducts(keyword, pageNumber))
   }, [dispatch, keyword, pageNumber])

   return (
      <>
         <Meta />
         {!keyword ? (
            <h1 style={{ textAlign: 'center' }}>כל המוצרים</h1>
         ) : (
            <Link to='/' className='btn btn-light'>
               הקודם
            </Link>
         )}
         {loading ? (
            <Loader />
         ) : error ? (
            <Message variant='danger'>{error}</Message>
         ) : (
            <>
               <Row>
                  {products.map((product) => (
                     <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                     </Col>
                  ))}
               </Row>
               <Paginate
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ''}
               />
            </>
         )}
      </>
   )
}

export default HomeScreen
