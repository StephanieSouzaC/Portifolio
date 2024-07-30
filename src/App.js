import React from 'react';
import './index.css';
import './App.css';
import './Components/NavBar/NavBar.js'
import NavBar from './Components/NavBar/NavBar.js';
import Header from './Components/Header/Header.js';
import Skills from './Components/Skills/Skills.js';
import Orcamentos from './Components/Orcamentos/Orcamentos.js';
import Contatos from './Components/Contatos/Contatos.js'
import Footer from './Components/Footer/Footer.js'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Skills/>
      <Orcamentos/>
      <Contatos/>
      <Footer/>
    </div>
  );
}

export default App;
