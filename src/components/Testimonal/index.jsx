import React from 'react';
import styles from "./style.module.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


const Testimonal = () => {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
    //   };

  return (
    <>
    <section className={styles.testimonal}>
        <div className={styles.TestimonalDescription}>
            <span>An enterprise template to ramp up your company website</span>
        </div>
        <div className={styles.testimonies}>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Data.map((item) => (
                <SwiperSlide  key={item.id} className={styles.slideContainer}>
                    <span>"{item.text}"</span>
                 </SwiperSlide>
            ))}
       
        

      </Swiper>


        </div>

    </section>
      
    </>
  )
}

export default Testimonal;
