import React from 'react';
import Hero from "../../components/Hero/index";
import Service from "../../components/Services/index";
import Customer from "../../components/Customer/index";
import Testimonal from "../../components/Testimonal/index";
import Connect from "../../components/Connect/index";

const HomePage = () => {
  return (
    <>
      <main>
          <Hero/>
          <Service/>
          <Customer/>
          <Testimonal/>
          <Connect/>
      </main>
    </>
  )
}

export default HomePage;