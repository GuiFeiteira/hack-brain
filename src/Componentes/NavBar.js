import React from 'react'
import logo from '../Recursos/logo-2.png'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='esquerda'>
        <Link to="/Home">
          <img src={logo} alt=''/>
        </Link>
      </div>
      <div className='direita'>
        
        <Link to="/contactos"> Contactos</Link>
        <Link to="/sobre"> Sobre Nós</Link>
        <Link to="/mentores"> Mentores</Link>
        <Link to="/jurados"> Jurados</Link>
      </div>
    </div>
  )
}

export default NavBar
