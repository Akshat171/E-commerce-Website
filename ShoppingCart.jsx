import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iphone", price: 56000, quantity: 0 },
      { id: 2, productName: "Samsung", price: 49000, quantity: 4 },
      { id: 3, productName: "Realme", price: 21000, quantity: 7 },
      { id: 4, productName: "MOTO", price: 13500, quantity: 8 },
      { id: 5, productName: "OnePlus", price: 26000, quantity: 2 },
      { id: 6, productName: "Redmi Note 10", price: 19000, quantity: 9 },
    ],
  };
  render() {
    return (
      <div className="Container-fluid">
        <h4>Shopping Cart</h4>
        <div className="Row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
            //key is undefined we can only access id .key is internally accessable by react to uniquely identifing each instense of element
            //React identiding which element is being added removed by using key internally
          })}
        </div>
      </div>
    );
  }
  //render ends

  //executes when the user clicks on the ++ button
  handleIncrement = (product, maxValue) => {
    //Get the index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      //update the state of the current selected product
      this.setState({ products: allProducts });
    }
  };

  //execute when the user clicks on -- button
  handleDecrement = (product, minValue) => {
    //get the index of the product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      //Update the state of current componenet (parent componenet)
      this.setState({ products: allProducts });
    }
  };
}
