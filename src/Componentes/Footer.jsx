import React from 'react';
import './Footer.css';
import imagem1 from '../Recursos/25609.png'
import imagem2 from '../Recursos/FHC_marca_Negativo_2.png'
import imagem3 from '../Recursos/cm-covilha_2.png'
import imagem4 from '../Recursos/logo2.png'
import imagem5 from '../Recursos/Amarelo__Branco.png'
import imagem6 from '../Recursos/logo_ubi_branco.png'
import insta from '../Recursos/instagram.png'
import face from '../Recursos/facebook.png'
import linkd from '../Recursos/linkedin.png'


const Footer = () => {
  return (
    <footer>

         <table className='footer_table'>
            <thead>
              <tr>
                <th className='letras'>Contactos:</th>
                <th>
                  <div className='direitos'>
                      <p>&copy; 2023 Direitos Reservados</p>
                  </div>
                </th>
                <th>Redes Sociais:</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                hackthebrain@medubi.pt
                </td>
                <td className='logos_img'>
                  <img className='imagem' src={imagem1} alt=''></img>
                  <img className='imagem' src={imagem2} alt=''></img>
                  <img className='imagem' src={imagem3} alt=''></img>
                  <img className='imagem_nucleo' src={imagem4} alt=''></img>
                  <img className='imagem' src={imagem5} alt=''></img>
                  <img className='imagem_ubi' src={imagem6} alt=''></img>
                </td>
                <td className='media_logos'>
                <img className='imagem2' src={insta} alt=''></img>
                <img className='imagem2' src={face} alt=''></img>
                <img className='imagem2' src={linkd} alt=''></img>
                </td>
              </tr>
            </tbody>

          </table>

          
    </footer>
  );
};

export default Footer;
