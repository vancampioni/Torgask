import React, { useMemo } from 'react';
import { format } from 'date-fns';
import * as S from './styled';


function TaskCard({ nome, data_agendada } ) {
    const data = data_agendada
    const hora = data_agendada
    console.log(hora)

    return (
      <S.Container>
          <S.TopArea>
              <h3>{ nome }</h3>
          </S.TopArea>
          <S.BottomArea>
              <strong>{ data }</strong>
              <span>{ hora }</span>
          </S.BottomArea>
      </S.Container>
    )
  }
  
  export default TaskCard;
  