import React from 'react';
import * as S from './styled';

import filter from '../../assets/filter.png'

function Filter({ title, actived }) {
    return (
      <S.Container actived={actived}>
        <img src={filter} alt="Filtro"/>
        <span>{title}</span>
      </S.Container>
    )
  }
  
  export default Filter;
  