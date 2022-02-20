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
          <Link to="/users/:user_id/home">INÍCIO</Link>
          <span className="dividir"/>
          <Link to="/users/1/goals">METAS</Link>
          <span className="dividir"/>
          <Link to="/goals/:goal_id/tasks/filter/index">TAREFAS</Link>
          <span className="dividir"/>
          <Link to="/goals/:goal_id/tasks/filter/late">
            <button id="notification">
              <img src={bell} alt="Notificacao" />
              <span>{lateCount}</span>
            </button>
          </Link>
        </S.RightSide>

      </S.Container>
    )
  }
  
  export default Header;
  