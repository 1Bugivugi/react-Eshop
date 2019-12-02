import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Wrapper from './components/Wrapper';
import { ProductProvider } from './context';

library.add(faShoppingCart, faCartPlus, faTrash);

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Router>
          <Wrapper />
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
