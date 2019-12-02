import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart/Cart';
import Default from './Default';
import Modal from './Modal';

class Wrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} /> {//  for not specified path
          }
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

export default Wrapper;
