import React from 'react';
import './Footer.css';

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
                  olaaaa1
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
