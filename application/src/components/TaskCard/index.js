import React, { useMemo } from 'react';
import { format } from 'date-fns';
import * as S from './styled';


function TaskCard({ assunto, nome, data_agendada } ) {
    const date = useMemo(() => format(new Date(data_agendada), 'dd/MM/yyyy') );
    const hour = useMemo(() => format(new Date(data_agendada), 'HH:mm') );


    return (
      <S.Container>
          <S.TopArea>
              <S.Subject>
                  <span>{ assunto }</span>
              </S.Subject>
              <h3>{ nome }</h3>
          </S.TopArea>
          <S.BottomArea>
              <strong>{ date }</strong>
              <span>{ hour }</span>
          </S.BottomArea>
      </S.Container>
    )
  }
  
  export default TaskCard;
  