import React from "react";

import Hero from "../components/Hero/Hero";
import HeroCard from "../components/HeroCard/HeroCard";
import Rapidscat from "../components/Rapidscat/Rapidscat";
import Satelite from "../components/Satelite/Satelite";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroCard />
      <Rapidscat />
      <Satelite />
      <Footer />
    </div>
  );
};

export default Home;