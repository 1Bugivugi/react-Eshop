import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmptyCart = ({}) => (
  <Container className='mt-5'>
    <Row>
      <Col xs={10} className='mx-auto text-center text-title'>
        <h1>
          your cart is empty
        </h1>
      </Col>
    </Row>
  </Container>
);

export default EmptyCart;
