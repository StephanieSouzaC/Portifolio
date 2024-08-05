import React from 'react';
import './Footer.css';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
    BrowserRouter as Router
  } from "react-router-dom";

const Footer = () => {

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
    <div className='footer__conteiner-footer'>
        <div className='logo'>
            <img src='/images/logoSite.png'></img>
        </div>
        <div className='footer__copyright'><p>©Desenvolvido por Stephanie Souza</p>
        </div>
        <div className='footer__contatos'>
            <div className='footer__contatos-titulo-footer'>
                <p>Contatos</p>
            </div>
            <div className='footer__contatos-infos'>
                <img className='footer__contatos-img' src='/images/Email.png' alt='email'/>
                <p className='footer__contatos-texto'>stephanie.dev01@gmail.com</p>
            </div>
            <a className='footer__contatos-link' href='https://www.linkedin.com/in/stephanie-souza-83a18b239/'> 
            <div className='footer__contatos-infos'>
                <img className='footer__contatos-img' src='/images/LinkedIn.png' alt='Logo LinkedIn'/>
                <p className='footer__contatos-texto'>LinkedIn</p>
            </div>
            </a>

            <Nav.Link href="#form" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
            <div className='footer__contatos-infos'>
                <img className='footer__contatos-img' src='/images/Form.png' alt='formulário'/>
                <p className='footer__contatos-texto'>Formulário</p>
            </div>
            </Nav.Link>
        </div>
    </div>
  )
}

export default Footer