import React from 'react';
import styles from "./style.module.css";
import {Data} from "./Data";

const Blog = () => {
  return (
    <>
      <section className={styles.Blog}>
        <div className={styles.BlogCon}>
          <div className={styles.BlogHeader}>
            <span className={styles.BlogTextHeading}>Our Blog</span>
            <span className={styles.BlogText}>
              Value proposition accelerator product management venture
            </span>
          </div>
          <article className={styles.BlogContainer}>
            {Data.map((item) => (
              <div key={item.id} className={styles.container}>
                <div className={styles.BlogImageCon}> <img src={item.image} alt="" /></div>
                <div className={styles.caty}> Category <span>{item.date}</span></div> 
                <div className={styles.desc}>
                  <span>{item.content}</span>
                </div>
                
                <div className={styles.explore}>
                   <img src={item.profile} alt="profileImage" /> 
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </article>
          <button className={styles.button}>Load More</button>
        </div>
      </section>
    </>
  );
}

export default Blog;