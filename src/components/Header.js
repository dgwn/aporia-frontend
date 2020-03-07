import React from 'react';

const Header = ( ) => {
    return (
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
    )
}

export default Header