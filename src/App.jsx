import React from 'react';
import Navebar from './components/Navebar/Navebar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Mywork from './components/MyWork/Mywork';

const App = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
    </div>
  );
}

export default App;
