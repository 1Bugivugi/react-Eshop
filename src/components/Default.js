import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Default
 */
class Default extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Row>
          <Col lg={10} className='mx-auto text-center text-title text-uppercase pt-5'>
            <h1 className='display-3'>404
            </h1>
            <h1>
              error
            </h1>
            <h2>
              page not found
            </h2>
            <h3>
              the requested URL<span className='text-danger'>{this.props.location.pathname}</span> was not found
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Default;
