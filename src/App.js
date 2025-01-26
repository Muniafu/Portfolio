import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import ProjectPage from "./pages/Projects";
import Contact from "./components/Contact";

function App() {

  return (
          
    <ThemeProvider>
      <Router>      
        <Navbar />    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>    
  )
};

export default App;