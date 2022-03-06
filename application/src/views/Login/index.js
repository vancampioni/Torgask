import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';
import { Context } from '../../services/context';

import api from '../../services/api';

// COMPONENTES
import Footer from '../../components/Footer';

function Login() {
  const { authenticated, handleLogin } = useContext(Context);
  console.debug('Login', authenticated);
  


  return (
    <S.Container>

      <S.RightSide>
        <span>Primeiro Acesso?</span>
        <Link to='/register'>
          <button type='button'>CADASTRE-SE</button>
        </Link>
      </S.RightSide>
      
      <S.Login>
      <S.Logo>
        <img src={logo} alt="Logo" />
      </S.Logo>
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <button type='button' onClick={handleLogin}>ENTRAR</button>
            </form>
          </div>
        </div>
            </S.Login>
            <Footer />
          </S.Container>
          );
  }

          export default Login;
