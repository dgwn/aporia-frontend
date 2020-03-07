import React from 'react';
import Beans from './components/Beans';
import Header from './components/Header';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './sass/main.scss';


function App() {

  

  return (
    <div className="App">

      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="nav-toggle"/>
        <label for="nav-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
      </div>

      <Header />
      <Beans />
      <Story />
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;
