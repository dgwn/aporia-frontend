import React from 'react';

const Navigation = (  ) => {
    return (
        <div className="navigation">

            <input type="checkbox" className="navigation__checkbox" id="nav-toggle"/>
            <label for="nav-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#beans" className="navigation__link"><span>01</span>Beans</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Our Story</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Contact Us</a></li>
                </ul>
            </nav>
        </div>
       
    )
}

export default Navigation