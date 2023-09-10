import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import Card from '../Componentes/Cartao'
import Carousel from '../Componentes/Carrossel'
import './Home.css'
import imagem1 from '../Recursos/banknotes-209104_1280.jpg'
import bkvideo from '../Recursos/video.mp4'


function Home() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={imagem1}
        titulo="1º Prêmio"
        paragrafo="Prêmio Monetário no valor de 750€  " />
        
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={imagem1} 
        titulo="2º Prêmio"
        paragrafo="Lorem ipsum dolor sit amet. "/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={imagem1}
        titulo="3º Prêmio"
        paragrafo="Lorem ipsum dolor sit amet. "/>
      )
    },

  ];
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCard((activeCard + 1) % cards.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeCard, cards.length]);



  return (
    <div className="video-container">
      <div className='video'>
        <video src={bkvideo} autoPlay loop muted />
        <div className='palavrasV'>
          <h1>Hack the Brain</h1>
          <p>
            Dia 28 e 29 de Setembro
          </p>
        </div>
        
      </div>
      <div className='titulo'>
        Premios
      </div>
      <div className="carrcontainer">
      <Carousel
        cards={cards}
        activeCard={activeCard}
        height="500px"
        width="50%"
        margin="0 auto"
        offset={2}
        showArrows={false}
        slides={cards}
      />
    </div>
    </div>
    
  );
}

export default Home;
