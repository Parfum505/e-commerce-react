import React, { useState, useEffect, createContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home";
import ShopPage from "./pages/shop/shop";
import Auth from "./pages/auth/auth";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase.utils";

export const CurrentUserContext = createContext([null]);

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );
    return () => unsubscribeFromAuth();
  }, []);
  console.log(currentUser);
  return (
    <CurrentUserContext.Provider value={[currentUser]}>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" exact component={ShopPage}></Route>
        <Route path="/sign-in" exact component={Auth}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
