import React, { useState, useEffect, createContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home";
import ShopPage from "./pages/shop/shop";
import Auth from "./pages/auth/auth";
import Header from "./components/header/header";
import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";

export const authContext = createContext({});

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [tryToSignIn, setTryToSignIn] = useState(false);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribeFromAuth();
  }, []);

  useEffect(() => {
    if (currentUser) {
      setTryToSignIn(false);
    }
  }, [currentUser]);

  return (
    <authContext.Provider
      value={{ currentUser, setCurrentUser, tryToSignIn, setTryToSignIn }}
    >
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" exact component={ShopPage}></Route>
          <Route path="/sign-in" exact component={Auth}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </authContext.Provider>
  );
};

export default App;
