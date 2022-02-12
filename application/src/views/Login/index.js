import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';

import api from '../../services/api';

// COMPONENTES
import Footer from '../../components/Footer';

function Login() {

    return (
      <S.Container>
            
        <S.RightSide>
          <span>Primeiro Acesso?</span>
          <button type='button'>CADASTRE-SE</button>
        </S.RightSide>
        <S.Logo>
          <img src={logo} alt="Logo" />
        </S.Logo>
        <Footer />
      </S.Container>
    );
  }
  
  export default Login;
  