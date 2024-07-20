import React from "react";
import Header from "./Header";

export const Login = () => {
  return (
    <div>
      <div className="Homepage">
        <div className="outerlogindiv">
          <div>
            <label className="logintitle" htmlFor="">
              Login
            </label>
          </div>
          <div className="labelemail">
            <label className="" htmlFor="">
              Email:
            </label>
          </div>
          <div className="EnterEmail">
            <input type="Email" placeholder="Enter Email" />
          </div>

          <div className="labelpassword">
            <label className="" htmlFor="">
              Password:
            </label>
          </div>
          <div className="EnterPassword">
            <input type="Password" placeholder="Enter Email" />
          </div>
          <div className="Loginbtn">
            <button>Login</button>
          </div>
          <div className="Donthaveac">
            Don't have an account?
            <a className="donthaveactoregister" href=""> Register </a>
          </div>
        </div>

        <br />

        {/* <input type="text" /> */}
      </div>
    </div>
  );
};
export default Login;
