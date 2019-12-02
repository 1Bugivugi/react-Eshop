import React, { Component } from 'react';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import { ProductConsumer } from '../context';

/**
 * ProductList
 */

class ProductList extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <Container>
          <Title name='our' title='products' />
            <Row>
              <ProductConsumer>
                {(value) => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
