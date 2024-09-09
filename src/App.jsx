import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}

export default App;
