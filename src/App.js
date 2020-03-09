import React from 'react';
import Beans from './components/Beans';
import Header from './components/Header';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import './sass/main.scss';


function App() {

  

  return (
    <div className="App">

      <Navigation />
      <Header />
      <Beans />
      <Story />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
