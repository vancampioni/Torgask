import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import TaskCard from '../../components/TaskCard';

function Home() {
  //const [goalActived, setGoalActived] = useState();
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    await api.get(`/goals/:goal_id/tasks/filter/${filterActived}`)
    .then(response => {
      setTasks(response.data)
    })
  };

  async function lateVerify() {
    await api.get(`/goals/:goal_id/tasks/filter/late`)
    .then(response => {
      setLateCount(response.data.length)
    })
  };

  function Notification() {
    setFilterActived('late');
  }

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActived])

    return (
      <S.Container>

        <Header lateCount={lateCount} clickNotification={Notification} />
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
          <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
        </S.Title>

        <S.TaskCardArea>
          {
            tasks.map(t => (
              <Link to={`/goals/${t.goal_id}/tasks/${t.id}`}>
              <TaskCard  nome={t.nome} assunto={t.goal_id} data_agendada={t.data_agendada} />
              </Link>
            ))
          }
        </S.TaskCardArea>
        
        <Footer />
      </S.Container>
    );
  }
  
  export default Home;
  