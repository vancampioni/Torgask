import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';
import Routes from '../../routes';

import api from '../../services/api';

// COMPONENTES
import Footer from '../../components/Footer';

function Login() {

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
        <div class="login-page">
          <div class="form">
            <form class="login-form">
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <button>ENTRAR</button>
            </form>
          </div>
        </div>
            </S.Login>
            <Footer />
          </S.Container>
          );
  }

          export default Login;
