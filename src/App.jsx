import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skill />
      <Project />
      <Footer />
    </main>
  );
}

export default App;
