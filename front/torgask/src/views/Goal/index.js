import React, { useState } from 'react';
import * as S from './styled';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GoalCard from '../../components/GoalCard';

function Goal() {
    const [filterActived, setFilterActived] = useState('all');

    return (
      <S.Container>
          <Header />
        <S.FilterArea>
          <button type="button" onClick={() => setFilterActived("all")}>
            <Filter title="Todos" actived={filterActived == 'all'} onClick={() => setFilterActived("all")}/>
          </button>
          <button type="button" onClick={() => setFilterActived("today")}>
            <Filter title="Hoje"actived={filterActived == 'today'} onClick={() => setFilterActived("today")}/>
          </button>
          <button type="button" onClick={() => setFilterActived("week")}>
            <Filter title="Semana" actived={filterActived == 'week'} onClick={() => setFilterActived("week")}/>
          </button>
          <button type="button" onClick={() => setFilterActived("month")}>
            <Filter title="Mês" actived={filterActived == 'month'} onClick={() => setFilterActived("month")}/>
          </button>
          <button type="button" onClick={() => setFilterActived("year")}>
            <Filter title="Ano" actived={filterActived == 'year'} onClick={() => setFilterActived("year")}/>
          </button>

        </S.FilterArea>

        <S.Title>
          <h3>METAS</h3>
        </S.Title>
          <GoalCard>
              <h3>Aprender Programação</h3>
          </GoalCard>
          <Footer />    
      </S.Container>
    );
  }
  
  export default Goal;
  