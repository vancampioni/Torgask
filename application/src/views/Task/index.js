import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import plus from '../../assets/plus-square.png';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import TaskCard from '../../components/TaskCard';

function Tasks() {
  const [filterActived, setFilterActived] = useState('index');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();
  

  async function loadTasks() {
    await api.get(`/tasks/filter/${filterActived}`)
    .then(response => {
      setTasks(response.data)
    })
  };

  async function lateVerify() {
    await api.get(`/tasks/filter/late`)
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

        <Link to="/task">
          <div className="new-task">
            <img id='cadastrar-tarefa' src={plus} alt="Cadastrar Tarefa" />
          </div>
        </Link>
        

        <S.TaskCardArea>
        {
          tasks.map(t => (
          <Link to={`/tasks/${t._id}`}>
            <TaskCard 
              />    
          </Link>
          ))  
        }
           
        </S.TaskCardArea>
        
        <Footer />
      </S.Container>
    );
  }
  
  export default Tasks;
  