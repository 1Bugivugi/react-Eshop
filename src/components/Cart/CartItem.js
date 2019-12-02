import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartItem ({item, value}) {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
  return (
    <Container fluid>
      <Row className='my-2 text-capitalize text-center'>
        <Col xs={10} lg={2} className='mx-auto'>
          <img
            src={img}
            alt='product'
            style={{width: '5rem', height: '5rem'}}
            className='img-fluid'
          />
        </Col>
        <Col xs={10} lg={2} className='mx-auto'>
          <span className='d-lg-none'>product : </span>{title}
        </Col>
        <Col xs={10} lg={2} className='mx-auto'>
          <span className='d-lg-none'>price : </span>${price}
        </Col>
        <Col className='mx-auto my-2 my-lg-0' xs={10} lg={2}>
          <div className='d-flex justify-content-center'>
            <div className=''>
              <span
                className='btn btn-black mx-1'
                onClick={() => decrement(id)}
              >-</span>
              <span className='btn btn-black mx-1'>{count}</span>
              <span
              className='btn btn-black mx-1'
              onClick={() => increment(id)}
              >+</span>
            </div>
          </div>
        </Col>
        <Col xs={10} lg={2} className='mx-auto'>
          <div
            className='cart-icon'
            onClick={() => removeItem(id)}
          >
            <FontAwesomeIcon icon='trash' />
          </div>
        </Col>
        <Col xs={10} lg={2} className='mx-auto'>
          <strong> item total : ${total}</strong>
        </Col>

      </Row>
    </Container>
  )
};

export default CartItem;
