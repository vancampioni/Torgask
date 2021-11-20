import React from 'react';
import * as S from './styled';


function TaskCard() {
    return (
      <S.Container>
          <S.TopArea>
              <S.Subject>
                  <span>assunto</span>
              </S.Subject>
              <h1>descricao</h1>
          </S.TopArea>
          <S.BottomArea>
              <span>data</span>
              <span>hora</span>
          </S.BottomArea>
      </S.Container>
    )
  }
  
  export default TaskCard;
  