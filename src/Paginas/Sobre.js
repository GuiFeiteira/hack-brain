import React from 'react'
import './Sobre.css'
import imagem1 from '../Recursos/25609.png'
import imagem2 from '../Recursos/FHC_marca.png'
import imagem3 from '../Recursos/covilha.png'
import imagem4 from '../Recursos/logo_nucleo.png'
import imagem5 from '../Recursos/logo_ubi_vprincipal.jpg'

function Sobre() {
  return (
    <div className='container'>
      <img className='imagem' src={imagem1} alt=''></img>
      <img className='imagem' src={imagem2} alt=''></img>
      <img className='imagem' src={imagem3} alt=''></img>
      <img className='imagem' src={imagem4} alt=''></img>
      <img className='imagem' src={imagem5} alt=''></img>
    </div>
  )
}

export default Sobre
