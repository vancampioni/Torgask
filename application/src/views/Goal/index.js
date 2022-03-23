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
  const [filterActived, setFilterActived] = useState('index');
  const [goals, setGoals] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadGoals() {
    await api.get(`/goals`)
    .then(response => {
      setGoals(response.data)
      console.log(response.data)
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
    loadGoals();
    lateVerify();
  }, [filterActived])
  

    return (
      <S.Container>
        <Header lateCount={lateCount} clickNotification={Notification} />

        <S.Title>
          <h3>METAS</h3>
        </S.Title>

        <Link to="/goal">
          
            <img id='cadastrar-tarefa' src={plus} alt="Cadastrar Tarefa" />
         
        </Link>

        <S.GoalCardArea>
        {
          goals.map(g => (
          <Link to={`/goals/${g.id}`}>
            <GoalCard
              nome={g.nome}
            />  
          </Link>
          ))  
        }

        </S.GoalCardArea>

        <Footer />
      </S.Container>
    );
  }
  
  export default Goal;
  