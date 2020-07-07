import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home";
import ShopPage from "./pages/shop/shop";
import Auth from "./pages/auth/auth";
import Header from "./components/header/header";
import CheckoutPage from "./pages/checkout/checkout";

const App = (props) => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
      <Route path="/sign-in" exact component={Auth}></Route>
      <Route path="/checkout" exact component={CheckoutPage}></Route>
      <Redirect to="/" />
    </Switch>
  </div>
);
export default App;
