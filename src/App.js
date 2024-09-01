import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

