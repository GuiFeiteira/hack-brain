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
        titulo="1º Premio"
        paragrafo="Prêmio Monetário no valor de 750€  " />
        
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" 
        titulo="2º Premio"
        paragrafo="Lorem ipsum dolor sit amet. Et iste suscipit et blanditiis beatae vel doloremque quibusdam ut natus eveniet in quae tenetur est perferendis assumenda "/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" 
        titulo="3º Premio"
        paragrafo="Lorem ipsum dolor sit amet. Et iste suscipit et blanditiis beatae vel doloremque quibusdam ut natus eveniet in quae tenetur est perferendis assumenda "/>
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
        
      </div>
      <div>
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
