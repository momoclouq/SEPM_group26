import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
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

import getWindowDimensions from "./pages/outerPages/components/getWindowDimensions";

import { Box } from "@material-ui/core";
import ScrollToTop from "./pages/outerPages/components/ScrollToTop";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();

  const {height, width} = getWindowDimensions();

  const navbarPadding = width >= 600 ? 60 : 50;

  return (
        <Router>
          <ScrollToTop />
          <Navbar />

          <div className={classes.container} style={{paddingTop: `${navbarPadding}px`}}>
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
          </div>

          <Footer />
    </Router>
  );
}

export default App;
