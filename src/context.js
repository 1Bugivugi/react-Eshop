import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

 // Context lets us pass a value deep into the component tree
 // without explicitly threading it through every component.
const ProductContext = React.createContext(); // Create CONTEXT OBJECT, no default in parantheses
// Whenever created, comes with 2 components
// Provider - gives info (should be on top)
// Consumer - to use info

/**
* ProductProvider
*/

class ProductProvider extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount() {
    this.setProducts();
  }

  /* Needed to escape mutating the original info from data.js */
  setProducts = () => {
    let products = [];
    storeProducts.forEach( item => {
      const singleItem = {...item};
      products = [...products, singleItem];
    })
    this.setState({products}
      // () => {
      //   return {products}
      // }
    )
  }

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({detailProduct: product})
    // this.setState(() => {return {detailProduct:product}})
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState({products: tempProducts, cart:[...this.state.cart, product]}, () => this.addTotals());
  }

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({modalProduct: product, modalOpen: true})
  }

  closeModal = () => {
    this.setState({modalOpen: false})
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState({cart:[...tempCart]}, this.addTotals())

    // this.setState(() => {return {cart:[...tempCart]}}, () => { addTotals() });
    // addTotals() is important to run as a callback function,
    // so that way we'll gonna know that the totals are gonna be counted exactly when they're changed
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState({cart:[...tempCart]}, this.addTotals())
    }

  }

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart]

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState({cart:[...tempCart], products:[...tempProducts]}, this.addTotals());

  }

  clearCart = () => {
    this.setState({cart:[]}, this.setProducts());
    this.addTotals();
  }

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total))
    const tempTax = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax;
    this.setState({cartSubTotal: subTotal, cartTax: tax, cartTotal: total})
  }


  // Use a Provider to pass the value to the tree below.
  // Any component can read it, no matter how deep it is.

  // It allows consuming components to subscribe to context changes

  // (since ProductContext.Provider sits on top of our component tree we would also want to return all the children that are gonna be in our app)
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

// Component that subscribes to context changes. This lets you sub to a context within a function component
//
const ProductConsumer = ProductContext.Consumer; // grabs the component that we get from out context object(and it's props/info)

export { ProductProvider, ProductConsumer };
