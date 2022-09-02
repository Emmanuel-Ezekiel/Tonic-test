import React from 'react';
import Hero from "../../components/Hero/index";
import Service from "../../components/Services/index";
import Customer from "../../components/Customer/index"

const HomePage = () => {
  return (
    <>
      <main>
          <Hero/>
          <Service/>
          <Customer/>
      </main>
    </>
  )
}

export default HomePage;