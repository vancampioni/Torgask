import React, { useState } from 'react';
import * as S from './styled';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import TaskCard from '../../components/TaskCard';

function Home() {
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
          <h3>TAREFAS</h3>
        </S.Title>

        <S.TaskCardArea>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </S.TaskCardArea>
        <Footer />
      </S.Container>
    );
  }
  
  export default Home;
  