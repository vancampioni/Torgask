import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskDetailsCard from '../../components/TaskDetailsCard';

function TaskDetails() {
  const [lateCount, setLateCount] = useState();
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [filterActived, setFilterActived] = useState();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();
  const [nome, setNome] = useState();
  const [anotacao, setAnotacao] = useState();
  const [assunto, setAssunto] = useState();
  const [estado, setEstado] = useState();
  const { id } = useParams();

  async function loadTaskDetails() {
    await api.get(`/tasks/${id}`)
      .then(response => {
        setNome(response.data.nome)
        setAnotacao(response.data.anotacao)
        setAssunto(response.data.assunto)
        setData(response.data.data_agendada)
        setHora(response.data.data_agendada)
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
  }

  

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify();
    loadTaskDetails();
  }, [filterActived])

  return (

    <S.Container>
      {redirect && <Redirect to="/tasks" />}
      <Header lateCount={lateCount} clickNotification={Notification} />


      <S.Title>
        <h3>DETALHES DA TAREFA</h3>
      </S.Title>

      <TaskDetailsCard
        nome={nome}
        anotacao={anotacao}
        data={data}
        hora={hora}
        assunto={assunto}
        estado={estado}
      />

     
      <Footer />
    </S.Container >
  );
}

export default TaskDetails;
