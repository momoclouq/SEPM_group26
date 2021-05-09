import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Homepage from "./pages/outerPages/Homepage";
import Tos from "./pages/outerPages/Tos";
import GettingStarted from "./pages/outerPages/GettingStarted";
import Solution from "./pages/outerPages/Solution";
import Navbar from "./pages/outerPages/Navbar";
import Footer from "./pages/outerPages/Footer";
import Why from "./pages/outerPages/Why";
import TokenDesc from "./pages/outerPages/TokenDesc";
import Login from "./pages/outerPages/Login";
import Register from "./pages/outerPages/Register";


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/why">
          <Why />
        </Route>
        <Route path="/token">
          <TokenDesc />
        </Route>
        <Route path="/solutions">
          <Solution />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/term_of_service">
          <Tos />
        </Route>
        <Route path="/start">
          <GettingStarted />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
