import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

function LateTasks() {
  //const [goalActived, setGoalActived] = useState();
  const [filterActived, setFilterActived] = useState('all');
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

        <S.Title>
          <h3>TAREFAS ATRASADAS</h3>
        </S.Title>        

        <S.TaskCardArea>
          {
            tasks.map(t => (
                <TaskCard  />
            ))
          }
        </S.TaskCardArea>
        
        <Footer />
      </S.Container>
    );
  }
  
  export default LateTasks;
  