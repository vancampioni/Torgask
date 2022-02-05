import React from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-cinza.png';
import bell from '../../assets/bell.png'

function Header({ lateCount, clickNotification }) {
    return (
      <S.Container>
        <S.LeftSide>
          <img src={logo} alt="Logo" />
        </S.LeftSide>

        <S.RightSide>
          <Link to="/goals/1/tasks/filter/index">INÍCIO</Link>
          <span className="dividir"/>
          <Link to="/users/1/goals">METAS</Link>
          <span className="dividir"/>
          <Link to="/goals/1/tasks">NOVA TAREFA</Link>
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
  