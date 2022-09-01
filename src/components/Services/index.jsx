import React from 'react';
import styles from "./style.module.css";
import {Data} from "./Data";
import { IoArrowForwardOutline } from "react-icons/io5";

const Service = () => {
  return (
    <>
      <section className={styles.services}>
        <div className={styles.servicesCon}>
          <div className={styles.ServiceHeader}>
            <span className={styles.ServiceTextHeading}>Our services</span>
            <span className={styles.ServiceText}>
              Handshake infographic mass market crowdfunding iteration.
            </span>
          </div>

          <article className={styles.servicesContainer}>
            {Data.map((item) => (
              <div key={item.id} className={styles.container}>
                <img src={item.image} alt="" />
                <span>{item.text}</span>
                <div className={styles.explore}>
                  <span>{item.explore}</span>
                  <div>
                     <IoArrowForwardOutline className={styles.arrow} />
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

export default Service;