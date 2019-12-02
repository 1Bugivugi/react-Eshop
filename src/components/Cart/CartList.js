import React from 'react';
import CartItem from './CartItem';
import Container from 'react-bootstrap/Container';

function CartList ({value}) {
  const {cart} = value;
  return (
    <Container fluid>
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} /> // We can either setup up an another Consumer OR pass info down as a prop
      })}
    </Container>
  )
};

export default CartList;
