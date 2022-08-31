import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";


const Navbar = (props) => {

   const navigate = useNavigate();

   const _signUp = () => {
     navigate("signup");
   };

  return (
    <>
      <header>
        <nav>
          <div className="work-head">
            <span className="work">Work</span>Alert
          </div>
          <button className="signUp" onClick={() => {_signUp()}}>{props.signUp}</button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;