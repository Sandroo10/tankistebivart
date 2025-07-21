import React from "react";
import Hero from "@/components/Hero";
import AnimatedGallery from "@/components/AnimatedGallery";
import About from "@/components/About";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <AnimatedGallery />
    </>
  );
};

export default Home;
