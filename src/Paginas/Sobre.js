import React from 'react'
import './Sobre.css'
import imagem1 from '../Recursos/25609.png'
import imagem2 from '../Recursos/FHC_marca.png'
import imagem3 from '../Recursos/covilha.png'
import imagem4 from '../Recursos/logo_nucleo.png'
import imagem5 from '../Recursos/logo_ubi_vprincipal.jpg'
import imagem6 from '../Recursos/Amarelo__Cinza.png'

function Sobre() {
  return (
    <div className='maxcontainer'>
      <h1>Sobre Nós</h1>
      <p>O Hack The Brain é uma atividade inovadora que surgiu em colaboração com várias entidades. A Organização pretende com esta atividade promover um espaço de inovação na área da saúde, através do trabalho em equipas multidisciplinares.
Toda a atividade foi organizada ao maior pormenor de forma a proporcionar a melhor experiência possível a todas as pessoas participantes, através de um painel de mentores de excelência, assim como, com um prémio único.</p>
      <div className='container'>
        <img className='imagem' src={imagem1} alt='' />
        <img className='imagem' src={imagem2} alt='' />
        <img className='imagem' src={imagem3} alt='' />
        <img className='imagem' src={imagem4} alt='' />
        <img className='imagem' src={imagem6} alt='' />
        <img className='imagem' src={imagem5} alt='' />
      </div>
    </div>
  );
}

export default Sobre
