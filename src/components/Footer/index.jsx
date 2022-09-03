import React from 'react';
import styles from "./style.module.css";
import ImageLogo from "../../assets/Logo.svg";
import { Data } from "./Data";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.CTA}>
            <div className={styles.divider}>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.CTAHeader}>
                <span>An enterprise template to ramp up your company website</span>
                <div className={styles.CTAForm}>
                    <form >
                        <input type="text" placeholder='Your email address'/>
                        <button> Start Now</button>
                    </form>
                </div>
            </div>
        </div>
        <div className={styles.footerContainer}>
            <div className={styles.footerCon}>
                <div className={styles.Logo}>
                    <img src={ImageLogo} alt="Logo" />
                    <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                    <span>All rights reserved.</span>
                </div>
                <div className={styles.Footerlist}>
                    <button>Hiring!</button>
                    {
                        Data.map((item) => (
                            <div key={item.id} className={styles.footListCon}>
                                <span className={styles.footheader}>{item.land}</span>
                                <div className={styles.footList}>
                                    <span>{item.home}</span>
                                    <span>{item.Products}</span>
                                    <span>{item.Services}</span>    
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
