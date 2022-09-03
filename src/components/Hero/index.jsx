import React from 'react';
import styles from "./style.module.css";
// import NavBar from "../../components/Navbar/index";
import Image from "../../assets/HeroGraphics (1).svg";
import { Data } from "./Data";
import ImageLogo from "../../assets/Logo.svg";
import { useNavigate } from 'react-router-dom';


const Hero  = () => {

  let navigate = useNavigate();
  const _home = () => {
    navigate("/");
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.divider}>
          <div className={styles.circle}></div>
        </div>
        
        <nav className={styles.nav}>
          <div className={styles.logo} onClick={_home}>
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

        <div className={styles.heroContainer}>
          <div className={styles.heroTextConatiner}>
            <span>Save time by building fast with Boldo Template</span>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First <br /> mover advantage innovator success
              deployment non-disclosure.
            </p>
            <div className={styles.heroButtonContainer}>
              <button className={styles.heroBtn}>Buy template</button>
              <button className={styles.heroBtn2}>Explore</button>
            </div>
          </div>
          <div className={styles.heroChartConatiner}>
            <img src={Image} alt="" />
          </div>
        </div>

        <div className={styles.sponsLogo}>
          {Data.map((item) => (
            <div key={item.id} className={styles.Logo}>
              <img src={item.image} alt="logo" />
              <img src={item.image2} alt="logo" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;