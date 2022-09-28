import React from 'react'
import Header from "./component/Header/Header"
import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Experience from "./component/experience/Experience";
import Service from "./component/services/Services"
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/testimonials/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App