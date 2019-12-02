import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Details
 */
class Details extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ProductConsumer>
        { value => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <Container className='py-5'>
              {/* title */}
              <Row>
                <Col className='mx-auto text-center text-slanted text-blue my-5'>
                  <h1>
                    {title}
                  </h1>
                </Col>
              </Row>
              {/* end title */}
              {/* product info */}
              <Row>
                <Col className='mx-auto my-3' md={6}>
                  <img src={img} className='img-fluid' alt='product' /> {/* img-fluid comes from Bootstrap and makes sure that img doesnt go outside of div where its enclosed*/}
                </Col>
                {/* product text */}
                <Col className='mx-auto my-3 text-capitalize' md={6}>
                  <h2>model: {title}
                  </h2>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>made by: <span className='text-uppercase'>{company}</span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>
                      price: ${price}
                    </strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    some info about the product:
                  </p>
                  <p className='text-muted lead'>
                    {info}
                  </p>
                  <div>
                    <Link to='/'>
                      <Button
                        className='mr-2'
                        size='lg'
                      >
                        Back To Products
                      </Button>
                    </Link>
                    <Button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      variant='warning'
                      size='lg'
                      >
                      {inCart ? 'In Cart' : 'Add To Cart'}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          )
        }}
      </ProductConsumer>
    );
  }
}



export default Details;
