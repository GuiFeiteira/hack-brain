import React from 'react'
import './Home.css'
import bkvideo from '../Recursos/video.mp4'

function Home() {
  return (
    <div className="video-container">
      <div className='video'>
        <video src={bkvideo} autoPlay loop muted />
        
      </div>
      <div>
        Premios
      </div>

      
    
    </div>
  );
}

export default Home;
