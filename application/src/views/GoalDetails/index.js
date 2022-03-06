import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as T from '../Task/styled'
import plusBlack from '../../assets/plus-black.png';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@date-io/date-fns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

function GoalDetails() {
  const [lateCount, setLateCount] = useState();
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [goalId, setGoalId] = useState();

  async function lateVerify() {
    await api.get(`/tasks/filter/late`)
      .then(response => {
        setLateCount(response.data.length)
      })
  };

  function Notification() {
    setFilterActived('late');
  }

  async function mostrarTarefas() {
    await api.get(`/goal/${goalId}/tasks`)
      .then(response => {
        setTasks(response.data)
      })
  };

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify();
    mostrarTarefas();
  }, [filterActived])

  return (

    <S.Container>

      <Header lateCount={lateCount} clickNotification={Notification} />


      <S.Title>
        <h3>DETALHES DA META</h3>
      </S.Title>

      <S.DetailsArea>
        <S.DetailsBox>
          <div className='nome-meta'>
            <h3>Nome</h3>
          </div>
          <div className='anotacao-meta'>
            <div className='texto-anotacao'>Texto</div>
          </div>
          
          <S.Date>
            <span>Data:</span>
            <input type="date" onChange={e => setData(e.target.value)} value={data} />
            <span>Hora:</span>
            <input type="time" onChange={e => setHora(e.target.value)} value={hora}></input>

          </S.Date>
          <div className='concluida'>
            <div>Concluída
              <input type='checkbox' />
            </div>

            <div className='buttons'>
              <button className='action-button' type='button' >EDITAR</button>
              <button id='excluir-button' className='action-button' type='button' >EXCLUIR</button>
            </div>
          </div>
        </S.DetailsBox>

        
      </S.DetailsArea >

      <T.TaskCardArea>
          {
            tasks.map(t => (
              <TaskCard />
            ))
          }

        </T.TaskCardArea>

      <Footer />
    </S.Container >
  );
}

export default GoalDetails;
