import React from "react";
import Advancing from "../components/Advancing";
import Client from "../components/Client";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Insights from "../components/Insights";
import NavBar from "../components/NavBar";
import News from "../components/News";
import Report from "../components/Report";
import Research from "../components/Research";
import Stories from "../components/Stories";

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Advancing />
      <Insights />
      <Research />
      <Client />
      <News />
      <Stories />
      <Report />
      <Footer />
    </div>
  );
};

export default index;
