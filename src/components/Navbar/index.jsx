import React from 'react';
import styles from "./style.module.css";
import ImageLogo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={ImageLogo} alt="imageLogo" className={styles.img} />
          </div>
          <div className={styles.navigation}>
            <span>Products</span>
            <span>Services</span>
            <span>About</span>
            <div className={styles.login}>
              <span>Login</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;