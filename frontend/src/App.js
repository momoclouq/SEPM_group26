import React from "react";
import Homepage from "./components/outerPages/Homepage";
import {BrowserRouter as Router} from "react-router-dom";
import Tos from "./components/outerPages/Tos";


function App() {
  return (
    <Router>
      <Tos />
    </Router>
  );
}

export default App;
