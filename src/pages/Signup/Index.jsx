import React from 'react';
import { useNavigate } from "react-router-dom";
import "./styles.css";

const SignUp = () => {

  const navigate = useNavigate();

   const _Login = () => {
     navigate("/");
   };
  
  return (
    <div>
      <header>
        <nav>
          <div className="work-head">
            <span className="work">Work</span>Alert
          </div>
          <button
            className="signUp"
            onClick={() => {
              _Login();
            }}
          >
            LOG IN
          </button>
        </nav>
      </header>
      <main>
        <div>
          <h1>SIGN UP</h1>
          <form>
            <input
              className="email"
              type="email"
              //    value="Email Password"
              placeholder="Email Address"
            />
            <input
              type="password"
              //    value="password"
              placeholder="Password"
            />
            <input
              type="password"
              //    value="password"
              placeholder="Confirm Password"
            />
          </form>
        </div>

        <div className="footerbtn">
          <button className="S-btn">SIGN UP</button>
        </div>
      </main>
    </div>
  );
}

export default SignUp;