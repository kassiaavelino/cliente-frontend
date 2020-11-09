import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/logo.png';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
        usuario: {
            nome: "",
            email: "",
            senha: "",
            endereco: "",
            cidade:"",
            estado:"",
            cep:"",
            telefone:""
        },
        erro: null,
        redirect: false
    };
}

exibeErro() {
  const { erro } = this.state;

  if (erro) {
      return (
          <div className="alert alert-danger" role="alert">
              Erro de conexão com o servidor
          </div>
      );
  }
}

    render() { 
    const { redirect } = this.state;
    if (redirect) {
        return <Redirect to="/produtos" />;
    } else {
   
        return(
            <div className="register-page">
              <div className="navbar">
                    <h1><Link to="/"><img className="logo" alt="logo" src={Logo}/></Link></h1>
                    <button className="button">
                        <Link to='/login'>LOGIN</Link>
                    </button>
                </div>
                
                <form onSubmit={this.handleSubmit} class="form">
                  <h1>PAGE CADASTRO</h1>
                  <fieldset>
                  <div class="form-row">
                  <div class="form-group col-md-8">
                    <label for="inputAddress2">Nome: </label>
                    <input type="text" 
                           id="nome"
                           class="form-control"
                           name="nome"
                           placeholder="Nome"
                           minLength="3"
                           maxLength="100"
                           required
                           value={this.state.usuario.nome}
                           onChange={this.handleInputChange}
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputAddress2">Telefone: </label>
                    <input type="text" 
                           id="telefone"
                           class="form-control"
                           name="telefone"
                           placeholder="Telefone"
                           minLength="3"
                           maxLength="100"
                           required
                           value={this.state.usuario.telefone}
                           onChange={this.handleInputChange}
                    />
                  </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email: </label>
                      <input type="email" 
                             class="form-control" 
                             id="inputEmail4"
                             name="email"
                             placeholder="Email"
                             minLength="3"
                             maxLength="100"
                             required
                             value={this.state.usuario.email}
                             onChange={this.handleInputChange}
                        />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Senha: </label>
                      <input type="password" 
                             class="form-control" 
                             id="inputPassword4"
                             name="senha"
                             placeholder="Senha"
                             minLength="3"
                             maxLength="100"
                             required
                             value={this.state.usuario.senha}
                             onChange={this.handleInputChange}
                             />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Endereço: </label>
                    <input type="text" 
                           class="form-control" 
                           id="inputAddress" 
                           placeholder="Ex.: Rua Nova Esperança 398"
                           name="endereco"
                           minLength="3"
                           maxLength="100"
                           required
                           value={this.state.usuario.endereco}
                           onChange={this.handleInputChange}
                           />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">Cidade: </label>
                      <input type="text" 
                             class="form-control" 
                             id="inputCity"
                             name="cidade"
                             placeholder="Cidade"
                             minLength="3"
                             maxLength="100"
                             required
                             value={this.state.usuario.cidade}
                             onChange={this.handleInputChange}
                             />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">Estado: </label>
                      <select id="inputState" class="form-control"
                      name="estado"
                      placeholder="Estado"
                      minLength="3"
                      maxLength="100"
                      required
                      value={this.state.usuario.estado}
                      onChange={this.handleInputChange}
                      >
                        <option selected>Choose...</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>GO</option>
                        <option>MT</option>
                        <option>MG</option>
                        <option>RJ</option>
                        <option>SC</option>
                        <option>SP</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputZip">CEP :</label>
                      <input type="text" 
                             class="form-control" 
                             id="inputZip"
                             name="cep"
                             placeholder="Cep"
                             minLength="3"
                             maxLength="100"
                             required
                             value={this.state.usuario.cep}
                             onChange={this.handleInputChange}
                             />

                    </div>
                  </div>
                    <button className="button-link">
                      <Link to='/login'>Voltar</Link>
                    </button>
                    <button type="submit" className="button-link">
                            Cadastrar
                    </button>
                  </fieldset>
                </form>
                
            </div>
        )
      }
    };

    handleInputChange = event => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState(prevState => ({
          usuario: { ...prevState.usuario, [name]: value }
      }));
      console.log(value);
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(prevState => ({
        usuario: { ...prevState.usuario, [name]: value }
    }));
    console.log(value);
};

handleSubmit = event => {
    fetch(`${process.env.REACT_APP_API_URL}/sistema/usuarios`, {
        method: "post",
        body: JSON.stringify(this.state.usuario),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(data => {
            if (data.ok) {
                this.setState({ redirect: true });
            } else {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    }
                });
            }
        })
        .catch(erro => this.setState({ erro: erro }));

    event.preventDefault();
};

}

export default Cadastro;