import React from 'react';
import CoffeeTile from './components/CoffeeTile';
import './sass/main.scss';

function App() {

  const beans = [
    1, 2, 3, 4
  ]

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
          <CoffeeTile bean={beans[0]} />
          <CoffeeTile bean={beans[1]} />
          <CoffeeTile bean={beans[2]} />
          <CoffeeTile bean={beans[3]} />
        </div>

      </section>

      <section className="section section-story" id="story">
        <h1 className="heading-primary--sub">Our Story</h1>

        <div className="row">
          <div className="col col-1-of-2">
            <img className="section-story__image" src={require("./img/frenchpress.jpg")} alt="sitting with coffee" />
          </div>
          <div className="col col-1-of-2">
            <p>Hella intelligentsia la croix, pop-up palo santo green juice truffaut. Slow-carb put a bird on it tumblr pok pok plaid, chambray fam glossier tattooed. +1 leggings copper mug shoreditch vice PBR&B small batch. Wolf distillery jianbing, cliche kogi thundercats taxidermy kickstarter blog.</p>
            <p>Distillery schlitz iPhone, trust fund coloring book man bun listicle neutra cronut fingerstache cliche skateboard. Tbh scenester skateboard cardigan mustache williamsburg irony narwhal heirloom. Distillery tilde food truck thundercats polaroid seitan bushwick, cray blue bottle neutra organic PBR&B mlkshk tumblr. Normcore scenester gochujang tumblr chia butcher. XOXO actually pork belly shoreditch. Shaman prism pork belly seitan squid. Art party food truck ramps, poke yr whatever mustache craft beer selfies enamel pin selvage vexillologist sriracha.</p>

          </div>
        </div>

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
