import React from 'react';
import './Footer.css';
import imagem1 from '../Recursos/25609.png'
import imagem2 from '../Recursos/FHC_marca_Negativo_2.png'
import imagem3 from '../Recursos/cm-covilha_2.png'
import imagem4 from '../Recursos/logo2.png'

const Footer = () => {
  return (
    <footer>

         <table className='footer_table'>
            <thead>
              <tr>
                <th>Contactos</th>
                <th>Logos</th>
                <th>Conectem-se connosco</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                info@exemplo.com
                </td>
                <td>
                  <img className='imagem' src={imagem1} alt=''></img>
                  <img className='imagem' src={imagem2} alt=''></img>
                  <img className='imagem' src={imagem3} alt=''></img>
                  <img className='imagem' src={imagem4} alt=''></img>
                </td>
                <td>
                  Intagrama
                </td>
              </tr>
            </tbody>

          </table>

          <div>
            <p>&copy; 2023 Direitos Reservados</p>
          </div>
    </footer>
  );
};

export default Footer;
