import React from 'react';
import styles from "./style.module.css";
import Image from "../../assets/Rectangle 12702.svg";
import { Data } from "./Data";



const Connect = () => {
  return (
    <>
      <section className={styles.connect}>
        <div className={styles.ImageContainer}>
            <img src={Image} alt="image" />
        </div>
        <div className={styles.DescContainer}>
            <div className={styles.Text}>
                <span>We connect our customers with the best, and help them keep up-and stay open.</span>
            </div>
            <div className={styles.dropDown}>
                { Data.map((item) => (
                    <div key={item.id} className={styles.dropList}>
                        <span>{item.text}</span>
                        <span className={styles.icon}>{item.image}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Connect;
