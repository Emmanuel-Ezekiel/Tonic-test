import React from 'react';
import styles from "./style.module.css";
import { Data } from "./Data";
import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';




const Testimonal = () => {
  let box = document.querySelector('.testimony');
  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
}

const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)
}
   
  return (
    <>
    <section className={styles.testimonal}>
        <div className={styles.testCon}>
        <div className={styles.TestimonalDescription}>
            <span>An enterprise template to ramp up your company website</span>
        </div>
        <div className={styles.Buttons}>
          <button onClick={btnpressprev}><FiArrowLeft className={styles.arrow} /></button>
          <button onClick={btnpressnext}><FiArrowRight className={styles.arrow}/></button>
        </div>
 
        <div className={`${styles.testimonies} .testimony`}>  
        {Data.map((item) => (
                        <div  key={item.id} className={styles.slideContainer}>
                          <div className={styles.list}>
                            <span className={styles.text}>"{item.text}"</span>
                              <div className={styles.listCont}>
                                <img src={item.image} alt="logoImage" />
                                <div className={styles.Imag}>
                                  <span className={styles.name}>{item.name}</span>
                                  <span className={styles.position}>{item.position}</span>
                                </div>
                              </div>
                          </div>  
                        </div>
                    ))}
        </div>
        </div>
        
    </section>
      
    </>
  )
}

export default Testimonal;
