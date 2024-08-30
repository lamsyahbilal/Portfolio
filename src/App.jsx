import React from 'react';
import Navebar from './components/Navebar/Navebar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Mywork from './components/MyWork/Mywork';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
    </div>
    
  );
}

export default App;
