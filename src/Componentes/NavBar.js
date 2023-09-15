import React, { useState, useEffect } from 'react';
import logo from '../Recursos/logo-2.png'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true)

  //fazer botao aparecer quando o tamanho da janela diminui
  const showbutton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
        } else{
            setButton(true);
    }
  }
  //fazer com que o botão nao apareça quando se dá refresh á pagina
  useEffect (() => {
    showbutton();
  }, []);


  window.addEventListener('resize', showbutton);

  return (
    <div className='navbar'>
      <div className='esquerda'>
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt=''/>
        </Link>
      </div>

      <div className='direita'>
      <div className='menu_icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} style={{ color: '#3ca9e2' }}/>
      </div>
        <ul className={click ? 'nav_menu active' : 'nav_menu'}>
          <Link to="/contactos" onClick={closeMobileMenu}> Contactos</Link>
          <Link to="/sobre" onClick={closeMobileMenu}> Sobre Nós</Link>
          <Link to="/mentores" onClick={closeMobileMenu}> Mentores</Link>
          <Link to="/programacao" onClick={closeMobileMenu}> Programação</Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
