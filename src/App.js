import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home";
import ShopPage from "./pages/shop/shop";
import Auth from "./pages/auth/auth";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" exact component={ShopPage}></Route>
        <Route path="/sign-in" exact component={Auth}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
