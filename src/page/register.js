import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="container_2">
        <h1>Register Form</h1>

        <h2>Trainne</h2>
        <hr style={{ clear: "both" }} />
      </div>
      <div className="container_1">
        <div className="con_1">
          <label htmlFor="">First Name:</label>
          <label htmlFor="">Last Name:</label>
          <label htmlFor="">Email:</label>
          <label htmlFor="">Password:</label>
          <label htmlFor="">Confirm Password:</label>
        </div>

        <div className="con_2">
          <input type="text" name="fName" required />
          <input type="text" name="LName" required />
          <input type="text" name="Email" required />
          <input type="text" name="Password" required />
          <input type="text" name="C_password" required />
        </div>
      </div>
      <button>Register</button>
    </div>
  );
};
export default Register;
