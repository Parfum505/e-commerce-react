import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
import HomePage from "./pages/home/home";
import ShopPage from "./pages/shop/shop";
import Auth from "./pages/auth/auth";
import Header from "./components/header/header";
import CheckoutPage from "./pages/checkout/checkout";
import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";
import { authSuccess, signOut } from "./redux/user/user-actions";

const App = (props) => {
  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          props.signInHandler({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        props.signOutHandler();
      }
    });
    return () => unsubscribeFromAuth();
  }, [props]);

  return (
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
};

const mapDispatchToProps = (dispatch) => ({
  signInHandler: (user) => dispatch(authSuccess(user)),
  signOutHandler: () => dispatch(signOut()),
});
export default connect(null, mapDispatchToProps)(App);
