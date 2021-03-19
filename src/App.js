import React, { Component } from "react";
import "./css/style.css";
import MyBanner from "./components/Banner";
import MyHeader from "./components/Header";
import MyForm from "./components/Form";
import MyFooter from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <MyHeader />
        <MyBanner />
        <MyForm />
        <MyFooter />
      </div>
    );
  }
}

export default App;