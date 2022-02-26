import React, { useState } from 'react';
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
  const [lateCount, setLateCount] = useState();
  const [goals, setGoals] = useState([]);
  
  async function getAll(req, res) {
    await api.get(`/users/:user_id/goals`, {
      params: {
        user_id: this.user_id
      }
    })
    .then(req.data)
  }

  async function lateVerify() {
    await api.get(`/goals/:goal_id/tasks/filter/late`, {
      params: {
        goal_id: this.goal_id
      }
    })
    .then(response => {
      setLateCount(response.data.length)
    })
  };

  function Notification() {
    setFilterActived('late');
  }
  

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
  