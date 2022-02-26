import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import plus from '../../assets/plus-square.png';


import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GoalCard from '../../components/GoalCard';

function Goal() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    await api.get(`/goals/1/tasks/filter/${filterActived}`)
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

        <S.Title>
          <h3>METAS</h3>
        </S.Title>

        <Link to="/users/:user_id/goal">
          
            <img id='cadastrar-tarefa' src={plus} alt="Cadastrar Tarefa" />
         
        </Link>

        <S.GoalCardArea>
          <GoalCard />

        </S.GoalCardArea>

        <Footer />
      </S.Container>
    );
  }
  
  export default Goal;
  