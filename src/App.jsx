import React from 'react';
import Navebar from './components/Navebar/Navebar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
