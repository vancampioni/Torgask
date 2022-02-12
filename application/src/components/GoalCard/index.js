import React from 'react';
import * as S from './styled';


function GoalCard({ nome }) {
    return (
      <S.Container>
          <h1>{ nome }</h1>
      </S.Container>
    )
  }
  
  export default GoalCard;
  