import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/**
 * ComponentName
 */
export class ComponentName extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {modalOpen, closeModal} = value;
          const {img, title, price} = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <Container>
                  <Row>
                    <Col id='modal' className='mx-auto text-center text-capitalize p-5' xs={8} md={6} lg={4}>
                      <h5>
                        item added to the cart
                      </h5>
                      <img src={img} alt='product' className='img-fluid' />
                      <h5>
                        {title}
                      </h5>
                      <h5 className='text-muted'>
                        price : $ {price}
                      </h5>
                      <div className='mt-3'>
                      <Link to='/'>
                        <Button
                          onClick={() => closeModal()}
                          variant='outline-primary'
                          style={{fontSize: 20}}
                          className='mr-2 mb-2'
                        >
                          Store
                        </Button>
                      </Link>
                      <Link to='/cart'>
                        <Button
                          onClick={() => closeModal()}
                          variant='outline-warning'
                          style={{fontSize: 20}}
                          className='mb-2 mr-2'
                        >
                          Go To Cart
                        </Button>
                      </Link>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </ModalContainer>
          )
          }
        }}
      </ProductConsumer>
    );
  }
}


export default ComponentName;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`
