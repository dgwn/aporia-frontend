import React from 'react';

const Footer = (  ) => {
    return (
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
    )
}

export default Footer