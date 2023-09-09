import React, { Component } from 'react';
import './Contacts.css'

class ContactForm extends Component {
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

  handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor ou realizar outras ações desejadas
    console.log(this.state);
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
