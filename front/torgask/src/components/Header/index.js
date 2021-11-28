import React from 'react';
import * as S from './styled';

import logo from '../../assets/logo-cinza.png';
import bell from '../../assets/bell.png'

function Header({ lateCount, clickNotification }) {
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
          <button onClick={clickNotification} id="notification">
            <img src={bell} alt="Notificacao" />
            <span>{lateCount}</span>
          </button>
        </S.RightSide>

      </S.Container>
    )
  }
  
  export default Header;
  