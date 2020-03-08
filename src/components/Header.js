import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Container, Button } from 'react-bootstrap';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'


var Header = () => {

  const [isMobile, setMobileView] = useState(false);
  const [isNavVisible, toggleNavVisibility] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setMobileView(true);
    } else {
      setMobileView(false);

    }
  };

  const toggleNav = () => {
    toggleNavVisibility(!isNavVisible);
  }
 

  const menuStyle = {
    display: "flex",
    justifyContent: "end",
    marginRight: "2rem",
    textDecoration: "none"
  }
  
  return (
          <header className="Header">
          <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
          <CSSTransition
              in= {!isMobile || isNavVisible}
              timeout={450}
              classNames="NavAnimation"
              unmountOnExit>

                  <nav className="Nav" style={menuStyle}>
                    <a href="/" style={{fontWeight: 800, borderRadius: "50px 50px"}}>React</a>
                  </nav>

          </CSSTransition>
          <div className="Burger" onClick={toggleNav}><FontAwesomeIcon className="Burger" icon={faHamburger} /></div>
    </header>

  );
}

export default Header

