import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg"
export const Footer = () => {
  return (
    <div className="gpt3__footer__container section__margin section__padding " >
      <div className="footer__heading__container ">
        <h2 className="gradient__text">Do you want to step in to the future before others</h2>
        <button>Request Early Access</button>
      </div>
      <div className="footer__nav__container">
        <div className="footer__logo__container">
          <img src={logo} alt="gpt3_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer__menu__container">
          <div className="footer__menu__links__container">
            <div className="links__title__container">
              <h4>Links</h4>
            </div>
            <div className="links__content__container">
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div> 
          </div>
          <div className="footer__menu__links__container">
            <div className="links__title__container">
              <h4>Company</h4>
            </div>
            <div className="links__content__container">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div> 
          </div>
          <div className="footer__menu__links__container">
            <div className="links__title__container">
              <h4>Get in touch</h4>
            </div>
            <div className="links__content__container">
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div> 
          </div>
        </div>
      </div>
      <div className="footer__rights"><p>© 2021 GPT-3. All rights reserved.</p></div>
    </div>
  );
};

export default Footer;
