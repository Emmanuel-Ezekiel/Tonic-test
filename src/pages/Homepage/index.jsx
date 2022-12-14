import React from 'react';
import Hero from "../../components/Hero/index";
import Service from "../../components/Services/index";
import Customer from "../../components/Customer/index";
import Testimonal from "../../components/Testimonal/index";
import Connect from "../../components/Connect/index";
import Blog from "../../components/Blog/index";
import Footer from "../../components/Footer/index";

const HomePage = () => {
  return (
    <>
      <main>
          <Hero/>
          <Service/>
          <Customer/>
          <Testimonal/>
          <Connect/>
          <Blog/>
          <Footer/>
      </main>
    </>
  )
}

export default HomePage;