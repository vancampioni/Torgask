import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';

import api from '../../services/api';

// COMPONENTES
import Footer from '../../components/Footer';

function Register() {

  const [nomeReg, setNomeReg] = useState();
  const [emailReg, setEmailReg] = useState();
  const [senhaReg, setSenhaReg] = useState();

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const [loginStatus, setLoginStatus] = useState();

  api.defaults.withCredentials = false;

  const register = () => {
    api.post("http://localhost:3333/users", {
      nome: nome,
      email: email,
      senha: senha
    }).then((response) => {
      console.log(response)
    });
  };

  return (
    <S.Container>

      
      <S.Form>
      <S.Logo>
        <img src={logo} alt="Logo" />
      </S.Logo>
            <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="text" placeholder="Usuário" value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    
                        <button type='button' onClick={register}>CADASTRAR</button>
                    
                </form>
            </div>
            </div>
       </S.Form>
            <Footer />
          </S.Container>
          );
  }

          export default Register;
