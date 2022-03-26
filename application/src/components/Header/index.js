import React from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-cinza.png';
import bell from '../../assets/bell.png'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Header({ lateCount, clickNotification }) {

    return (
      <S.Container>
        <S.LeftSide>
          <img src={logo} alt="Logo" />
        </S.LeftSide>

        <S.RightSide>
          <Link to="/home">INÍCIO</Link>
          <span className="dividir"/>
          <Link to="/goals">METAS</Link>
          <span className="dividir"/>
          <Link to="/tasks">TAREFAS</Link>
          <span className="dividir"/>
          <Link to="/tasks/filter/late">
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
  