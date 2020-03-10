import React, {useState} from 'react';

const Navigation = (  ) => {

    // ideally, make an onClick function that toggles the navigation__checkbox off whenever one of the navigation__links are clicked

    const [navChecked, setNavChecked] = useState(false)
    let toggleMenu = () => {
        if (navChecked === false) {
            setNavChecked(true)
        }
        else {
            setNavChecked(false)
        }

    }
        
    

    return (
        <div className="navigation">

            <input type="checkbox" className="navigation__checkbox" id="nav-toggle" checked={navChecked} onChange={toggleMenu} />
            <label htmlFor="nav-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" ><a href="#beans" className="navigation__link" onClick={toggleMenu} ><span>01</span>Beans</a></li>
                    <li className="navigation__item"><a href="#story" className="navigation__link" onClick={toggleMenu}><span>02</span>Our Story</a></li>
                    <li className="navigation__item"><a href="#contact" className="navigation__link" onClick={toggleMenu}><span>03</span>Contact Us</a></li>
                </ul>
            </nav>
        </div>
       
    )
}

export default Navigation