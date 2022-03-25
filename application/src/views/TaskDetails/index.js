import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCardDetails from '../../components/TaskDetailsCard';

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
  const idInt = parseInt(id);

  async function loadTaskDetails() {
    await api.get(`/tasks/${idInt}`)
      .then(response => {
        console.log(response.data)
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

  // async function Remove(){
  //   const res = window.confirm('Deseja realmente remover a tarefa?')
  //   if(res == true){
  //     await api.delete(`/tasks/${id}`)
  //     .then(() => setRedirect(true));
  //   }
  // }

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify();
    loadTaskDetails();
  }, [])

  return (

    <S.Container>
      {redirect && <Redirect to="/tasks" />}
      <Header lateCount={lateCount} clickNotification={Notification} />


      <S.Title>
        <h3>DETALHES DA TAREFA</h3>
      </S.Title>
      {/* {
          task.map(t => (
            <Link to={`/tasks/${t.id}`}>
              <TaskCardDetails
                nome={t.nome}
                anotacao={t.anotacao}
                assunto={t.assunto}
                data_agendada={t.data_agendada}
                estado={t.estado}
              />
            </Link>
          ))
        } */}
      <TaskCardDetails />

      <Footer />
    </S.Container >
  );
}

export default TaskDetails;
