import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
// import MainComponent from "./MainContent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart />
        {/* <CustomersList /> */}
      </React.Fragment>
    );
  }
}

export default App;
