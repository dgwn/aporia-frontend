import React from 'react';
import logo from './logo.svg';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Aporia</span>
            <span className="heading-primary--sub">Coffee</span>
          </h1>

          <div className="home-links">
              <ul className="home-links__list">
                <li className="home-links__item"><a href="#" className="home-links__link">Beans</a></li>
                <li className="home-links__item"><a href="#" className="home-links__link">Our Story</a></li>
                <li className="home-links__item"><a href="#" className="home-links__link">Contact Us</a></li>
              </ul>
          </div>
          

        </div>
      </header>
    </div>
  );
}

export default App;
