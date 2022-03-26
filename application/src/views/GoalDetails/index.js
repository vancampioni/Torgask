import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GoalDetailsCard from '../../components/GoalDetailsCard';

function GoalDetails() {
  const [lateCount, setLateCount] = useState();
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [filterActived, setFilterActived] = useState();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [data_inicio, setDataInicio] = useState();
  const [data_fim, setDataFim] = useState();
  const [estado, setEstado] = useState();
  const [goal, setGoal] = useState();
  const { id } = useParams();
  const { user_id } = useParams();

  async function loadGoalDetails() {
    await api.get(`/goals/${id}`)
      .then(response => {
        setNome(response.data.nome)
        setDescricao(response.data.descricao)
        setDataInicio(response.data.data_inicio)
        setDataFim(response.data.data_fim)
        setEstado(response.data.estado)
      })
  }

  async function lateVerify() {
    await api.get(`/tasks/filter/late`)
      .then(response => {
        setLateCount(response.data.length)
      })
  };

  function Notification() {
    setFilterActived('late');
  };

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify();
    loadGoalDetails();
  }, [])

  return (

    <S.Container>
      <Header lateCount={lateCount} clickNotification={Notification} />

      <S.Title>
        <h3>DETALHES DA META</h3>
      </S.Title>

      <GoalDetailsCard
        nome={nome}
        descricao={descricao}
        data_inicio={data_inicio}
        data_fim={data_fim}
        estado={estado}
      />

     
      <Footer />
    </S.Container >
  );
}

export default GoalDetails;
