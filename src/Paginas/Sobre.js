import React from 'react'
import './Sobre.css'
import imagem1 from '../Recursos/25609.png'
import imagem2 from '../Recursos/FHC_marca.png'
import imagem3 from '../Recursos/covilha.png'
import imagem4 from '../Recursos/logo_nucleo.png'
import imagem5 from '../Recursos/logo_ubi_vprincipal.jpg'

function Sobre() {
  return (
    <div className='maxcontainer'>
      <h2>Sobre Nós</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='container'>
        <img className='imagem' src={imagem1} alt='' />
        <img className='imagem' src={imagem2} alt='' />
        <img className='imagem' src={imagem3} alt='' />
        <img className='imagem' src={imagem4} alt='' />
        <img className='imagem' src={imagem5} alt='' />
      </div>
    </div>
  );
}

export default Sobre
