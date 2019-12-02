import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Title({name, title}){
  return (
    <Container>
      <Row>
        <Col className='text-title text-center'>
          <h1 className='text-capitalize font-weight-bold'>
            {name} <strong className='text-blue'>{title}</strong>
          </h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Title;
