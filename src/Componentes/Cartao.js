import React , { useState } from 'react'
import { useSpring, animated } from "react-spring";
import './Cartao.css'

function Cartao({ imagen, titulo, paragrafo }) {
    const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 50%)"
  });
  return (
<animated.div
      className={"card"}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{titulo}</h2>
      <p>
        {paragrafo}
      </p>
      
    </animated.div>
  )
}

export default Cartao
