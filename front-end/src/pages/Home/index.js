import React from "react";

// components
import Layout from "../../components/Layout";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import Services from "../../components/Services";

// dummy data
import { homeObjOne, homeObjTwo, homeObjThree } from "../../Data";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </Layout>
  );
}

export default Home;
