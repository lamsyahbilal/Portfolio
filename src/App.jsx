import React from 'react';
import Navebar from './components/Navebar/Navebar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
