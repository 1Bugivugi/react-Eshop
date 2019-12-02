import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

function CartTotals({ value, history }){
  const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className='mt-2 ml-sm-5 ml-md-auto text-capitalize text-right' xs={10} sm={8}>
            <Link to='/'>
              <Button
                variant='outline-danger text-uppercase mb-3 px-5'
                type='button'
                onClick={() => clearCart()}
              >
                clear cart
              </Button>
            </Link>
            <h5>
              <span className='text-title'>
                subtotal :
              </span>
              <strong>$ {cartSubTotal}
              </strong>
            </h5>
            <h5>
              <span className='text-title'>
                tax :
              </span>
              <strong>$ {cartTax}
              </strong>
            </h5>
            <h5>
              <span className='text-title'>
                total :
              </span>
              <strong>$ {cartTotal}
              </strong>
            </h5>
            {/*
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            /> 
            */}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default CartTotals;
