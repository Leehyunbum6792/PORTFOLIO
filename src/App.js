import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SubProjects from "./components/SubProjects";

const App = () => {
  return (
    <>
      <Navigation />
      <Title />
      <Skills />
      <Projects />
      <SubProjects />
      <Footer />
    </>
  );
};

export default App;
