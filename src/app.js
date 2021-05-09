import React from "react";

import Register from "./page/register.js";
import Login from "./page/login.js";
import Projects from "./page/project";
import { Route, link } from "react-router-dom";
import Why from "./page/why";

// just index
function App() {
  return (
    <Route exact path="/login1">
      <Register></Register>
    </Route>
  );
}

// const InputField = () => {
//   return (
//     <div className="container_2">
//       <h1>Trainee</h1>
//       <label className="label-class-username" htmlFor="user">
//         Username:
//       </label>
//       <input type="text" name="user" required />

//       <label className="label-class-password" htmlFor="pass">
//         Password:
//       </label>
//       <span className="psw">
//         Forgot <a href="// eslint-disable-next-line">Password?</a>
//       </span>
//       <input type="text" name="pass" required />

//       <button class="login" type="submit">
//         Login
//       </button>

//       <span className="rgs">
//         Don't have an account?{" "}
//         <a href="// eslint-disable-next-line">Create One</a>
//       </span>
//     </div>
//   );
// };

export default App;
