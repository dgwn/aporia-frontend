import React from 'react';
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
            <span className="heading-primary--sub">Coffee Roasting</span>
          </h1>
        </div>

          <div className="home-links">
              <ul className="home-links__list">
                <li className="home-links__item"><a href="#beans" className="home-links__link heading-primary--sub">Beans</a></li>
                <li className="home-links__item"><a href="#story" className="home-links__link heading-primary--sub">Our Story</a></li>
                <li className="home-links__item"><a href="#contact" className="home-links__link heading-primary--sub">Contact Us</a></li>
              </ul>
          </div>

      </header>
    
      <section className="section section-beans" id="beans">
        <h1 className="heading-primary--sub">Beans</h1>

        <div className="row">
          <div className="col col-1-of-4">
            <div className="bean-card"></div>
          </div>
          <div className="col col-1-of-4">
            <div className="bean-card"></div>
          </div>
          <div className="col col-1-of-4">
            <div className="bean-card"></div>
          </div>
          <div className="col col-1-of-4">
            <div className="bean-card"></div>
          </div>
        </div>

        <div className="row">
          <div className="col col-1-of-4">
            <div className="bean-card"></div>
          </div>
          <div className="col col-1-of-4">
            <div className="bean-card"></div>
          </div>
          <div className="col col-1-of-4">
            <div className="bean-card"></div>
          </div>
          <div className="col col-1-of-4">
            <div className="bean-card"></div>
          </div>
        </div>
        
      </section>

      <section className="section section-story" id="story">
        <h1 className="heading-primary--sub">Our Story</h1>

      </section>

      <section className="section section-contact" id="contact">
        <h1 className="heading-primary--sub">Contact Us</h1>

      </section>

      <footer className="footer">
        <div className="row">
          <div className="col col-1-of-2">
            <div className="footer-nav">
              <ul className="footer__list">
                <li className="footer__item"><a href="#" class="footer__link">Company</a></li>
                <li className="footer__item"><a href="#" class="footer__link">Contact Us</a></li>
                <li className="footer__item"><a href="#" class="footer__link">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="col col-1-of-2">
            <p>This content is for mockup purposes only. Any references to companies or products are not endorsements and not representative of the views of said company/product. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
