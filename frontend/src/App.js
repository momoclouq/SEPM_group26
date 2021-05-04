import React from "react";
import Homepage from "./components/outerPages/Homepage";
import {BrowserRouter as Router} from "react-router-dom";
import Tos from "./components/outerPages/Tos";
import GettingStarted from "./components/outerPages/GettingStarted";
import Solution from "./components/outerPages/Solution";


function App() {
  return (
    <Router>
      <Solution />
    </Router>
  );
}

export default App;
