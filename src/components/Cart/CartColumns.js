import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartColumns = ({}) => (
  <Container fluid className='text-center d-none d-lg-block'>
    <Row>
      <Col className='mx-auto' xs={10} lg={2}>
        <p className='text-uppercase'>
          products
        </p>
      </Col>
      <Col className='mx-auto' xs={10} lg={2}>
        <p className='text-uppercase'>
          name of product
        </p>
      </Col>
      <Col className='mx-auto' xs={10} lg={2}>
        <p className='text-uppercase'>
          price
        </p>
      </Col>
      <Col className='mx-auto' xs={10} lg={2}>
        <p className='text-uppercase'>
          quantity
        </p>
      </Col>
      <Col className='mx-auto' xs={10} lg={2}>
        <p className='text-uppercase'>
          remove
        </p>
      </Col>
      <Col className='mx-auto' xs={10} lg={2}>
        <p className='text-uppercase'>
          total
        </p>
      </Col>
    </Row>
  </Container>
);

export default CartColumns;
