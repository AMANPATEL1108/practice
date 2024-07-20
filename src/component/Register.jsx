import React from "react";

const Register = () => {
  return (
    <div className="registerpagemain">
      <div className="registerpage">
        <div className="outerregisterationdiv">
          <div>
            <label className="registertitle" htmlFor="">
              Register
            </label>
          </div>
          <div>
            <div className="labelname">
              <label className="" htmlFor="">
                Name:
              </label>
            </div>
            <div className="EnterName">
              <input type="Email" placeholder="Enter Name" />
            </div>
          </div>
          <div className="labelemail">
            <label className="" htmlFor="">
              Email:
            </label>
          </div>
          <div className="EnterEmail">
            <input type="Email" placeholder="Enter Email" />
          </div>
          <div>
            <div className="labelNumber">
              <label className="" htmlFor="">
                Phone Number:
              </label>
            </div>
            <div className="EnterNumber">
              <input type="Password" placeholder="Enter Phone Number" />
            </div>
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
            Already have an account?
            <a className="donthaveactoregister" href="">
              {" "}
              Register{" "}
            </a>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
};

export default Register;
