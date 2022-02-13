import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';

import api from '../../services/api';

// COMPONENTES
import Footer from '../../components/Footer';

function Register() {

  return (
    <S.Container>

      <S.Logo>
        <img src={logo} alt="Logo" />
      </S.Logo>
      <S.Form>
            <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <Link to=''>
                        <button>CADASTRAR</button>
                    </Link>
                </form>
            </div>
            </div>
       </S.Form>
            <Footer />
          </S.Container>
          );
  }

          export default Register;
