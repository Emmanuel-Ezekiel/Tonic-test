import React from 'react';
import NavBar from "../../components/Navbar/index";
import './Login.css';

const Login = () => {
  return (
    <>
      <NavBar />
      <main>
        <div>
          <h1>LOG IN</h1>
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
          </form>
        </div>

        <div className="footerbtn">
          <button className="F-btn">FORGOT PASSWORD</button>
          <button className="L-btn">LOG IN</button>
        </div>
      </main>
    </>
  );
}

export default Login;