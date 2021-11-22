import React from 'react';
import * as S from './styled';


function TaskCard() {
    return (
      <S.Container>
          <S.TopArea>
              <S.Subject>
                  <span>assunto</span>
              </S.Subject>
              <h3>descricao</h3>
          </S.TopArea>
          <S.BottomArea>
              <strong>data</strong>
              <span>hora</span>
          </S.BottomArea>
      </S.Container>
    )
  }
  
  export default TaskCard;
  