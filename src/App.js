import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";

function Hats() {
  return <div>Hats</div>;
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hats" exact component={Hats}></Route>
        <Route path="/" exact component={HomePage}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
