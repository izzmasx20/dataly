import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Testmonial from './components/Testmonial';
import Footer from './components/Footer';





function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Products />
      <Testmonial />
      <Footer />
      

    </div>
  )
}

export default App