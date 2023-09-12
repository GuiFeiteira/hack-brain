import React, { Component } from 'react';
import emailjs from '@emailjs/browser'
import './Contacts.css'


const EMAILJS_USER_ID = 'RZeqzt3VSaF2tuGyF';
const EMAILJS_TEMPLATE_ID = 'template_ojreiwr';
const EMAILJS_SERVICE_ID = 'service_s6c4q3f';

class ContactForm extends Component {

  // Dentro do seu componente ContactForm
sendEmail = () => {
  emailjs
    .send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        user_nome: this.state.nome,
        user_email: this.state.email,
        mensage: this.state.mensagem,
      },
      EMAILJS_USER_ID
    )
    .then(
      (response) => {
        console.log('Email enviado com sucesso!', response);
        // Aqui você pode adicionar ações após o envio bem-sucedido
      },
      (error) => {
        console.error('Erro ao enviar o email:', error);
        // Aqui você pode adicionar tratamento de erros, se necessário
      }
    );
};

handleSubmit = (event) => {
  event.preventDefault();
  console.log('Formulário enviado');
  // Validação do formulário
  // ...

  // Envie o email após a validação
  this.sendEmail();
};


  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      mensagem: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div className='form_container'>
        <h1>Formulário de Contato</h1>
        <form onSubmit={this.handleSubmit}>
            
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={this.state.mensagem}
              onChange={this.handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
