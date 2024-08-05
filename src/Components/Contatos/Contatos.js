import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Contatos.css';
import { NavLink } from "react-router-dom";
import {
    BrowserRouter as Router
  } from "react-router-dom";
  

  
  
  const Contatos = () => {

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
        <div className='contatos__conteiner-contatos' id="Contatos">
            <div className='contatos__contatos-titulo'>
                <h2>CONTATOS</h2>
            </div>
            <div className='contatos__contatos-subtitulo'>
                <h3>Entre em contato comigo!</h3>
            </div>
            <div className='contatos__contatos-texto'>
                <p>Se você tem um projeto em mente ou quer saber mais sobre meu trabalho, entre em contato!</p>
            </div>
            <div className='contatos__contatos-infos'>
                <div className='contatos__contatos-infos-imagens'>
                    <img src='/images/imgContatos.png' alt='Mulher em Vídeo Chamada' />
                </div>
                <div className='contatos__contatos-infos-card'>
                    <div className='contatos__contatos-infos-card-line'>
                        <div className='contatos__contatos-infos-card-img'>
                            <a className='contatos__contatos-link' href='https://www.linkedin.com/in/stephanie-souza-83a18b239/'> 
                            <img src='/images/LinkedIn.png' alt='Logo LinkedIn'></img>
                            <div className='contatos__contatos-infos-card-texto'>
                                <p>LinkedIn</p>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className='contatos__contatos-infos-card-line'>
                        <div className='contatos__contatos-infos-card-img'>
                    <Nav.Link id='contatos_navLink' href="#form" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                        <img src='/images/Form.png' alt='Formulário'>
                        </img>
                                <div className='contatos__contatos-infos-card-texto'>
                                    <p>Formulário</p>
                                </div>
                            </Nav.Link>
                        </div>
                    </div>
                    <div className='contatos__contatos-infos-card-img'>
                        <div className='contatos__contatos-infos-card-img-email'>
                            <img src='/images/Email.png' alt='Email'></img>
                            <div className='contatos__contatos-infos-card-texto'>
                                <p>stephanie.dev03@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contatos