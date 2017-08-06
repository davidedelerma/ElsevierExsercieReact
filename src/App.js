import React, { Component } from 'react';
import './App.css';
import ProductsContainer from'./Products/ProductsContainer';

class App extends Component {
  
  render() {
    return (
      <div className="App" style={{display:"inline"}}>
        <div className="App-header" >
          <h2>Elsevier Product List</h2>
        </div>
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
