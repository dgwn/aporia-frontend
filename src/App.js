import React from 'react';
import logo from './logo.svg';
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

      <header className="header">

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Aporia</span>
            <span className="heading-primary--sub">Coffee</span>
          </h1>
        </div>

          <div className="home-links">
              <ul className="home-links__list">
                <li className="home-links__item"><a href="#" className="home-links__link heading-primary--sub">Beans</a></li>
                <li className="home-links__item"><a href="#" className="home-links__link heading-primary--sub">Our Story</a></li>
                <li className="home-links__item"><a href="#" className="home-links__link heading-primary--sub">Contact Us</a></li>
              </ul>
          </div>

      </header>
    </div>
  );
}

export default App;
