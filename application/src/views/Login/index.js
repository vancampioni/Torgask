import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Login() {

    return (
      <S.Container>

        <Header />
            
        
        <Footer />
      </S.Container>
    );
  }
  
  export default Login;
  