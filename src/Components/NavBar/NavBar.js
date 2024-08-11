import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="xl" className={scrolled ? "scrolled" : ""} id="navBar">
        <Container>
          <Navbar.Brand href="/">
            <img src="images/logoSite.png" alt="Logo" className="navBar__logo"/>
          </Navbar.Brand>
          <Navbar.Toggle className="navBar__menu">
            <span><img src="/images/menu.png" className="navBar__menu-img"></img></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Header" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#Skills" className={activeLink === 'habilidades' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('habilidades')}>Skills</Nav.Link>
              <Nav.Link href="#Contatos" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contatos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/stephanie-souza-83a18b239/" target="__blank"><img src="/images/linkedin-logo.png"></img></a>
              <a href="https://github.com/StephanieSouzaC" target="__blank"><img src="/images/github-logo.png"></img></a>
              </div>
              <HashLink to='#formOrcamento'>
                <button className="vvd"><span>Orçamentos</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
export default NavBar;

