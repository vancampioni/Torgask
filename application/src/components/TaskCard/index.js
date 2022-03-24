import React, { useMemo } from 'react';
import { format } from 'date-fns';
import * as S from './styled';


function TaskCard({ nome, assunto, data_agendada } ) {
    // const data = useMemo(() => format(new Date(data_agendada), 'dd/MM/yyyy'));
    // const hora = useMemo(() => format(new Date(data_agendada), 'HH:mm'));
   

    return (
      <S.Container>
          <S.TopArea>
              <h3>{ nome }</h3>
          </S.TopArea>
          <S.Assunto>
              <h3>{ assunto }</h3>
          </S.Assunto>
          <S.BottomArea>
              <strong>{ data_agendada }</strong>
          </S.BottomArea>
      </S.Container>
    )
  }
  
  export default TaskCard;
  