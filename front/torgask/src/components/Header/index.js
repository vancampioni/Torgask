import React from 'react';
import * as S from './styled';

import logo from '../../assets/logo-cinza.png';
import bell from '../../assets/bell.png'

function Header() {
    return (
      <S.Container>
        <S.LeftSide>
          <img src={logo} alt="Logo" />
        </S.LeftSide>

        <S.RightSide>
          <a href="#">INÍCIO</a>
          <span className="dividir"/>
          <a href="#">METAS</a>
          <span className="dividir"/>
          <a href="#">TAREFAS</a>
          <span className="dividir"/>
          <a href="#" id="notification">
            <img src={bell} alt="Notificacao" />
            <span>5</span>
          </a>
        </S.RightSide>

      </S.Container>
    )
  }
  
  export default Header;
  