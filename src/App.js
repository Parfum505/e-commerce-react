import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
