import React, { useState, useEffect } from 'react';
import * as S from './styled';


import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function TaskDetails() {
  const [lateCount, setLateCount] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [filterActived, setFilterActived] = useState();
    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        await api.get(`/tasks/filter/index`)
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
        <h3>DETALHES DA TAREFA</h3>
      </S.Title>

      <S.DetailsArea>
        <S.DetailsBox>
          
          <div className='nome-tarefa'>
            <h3>Nome</h3>
          </div>
          <div className='anotacao-tarefa'>
            <div className='texto-anotacao'>Texto</div>
          </div>
          <div className='data-tarefa'>
          <S.Date>
            <span>Data:</span>
            <input type="date" onChange={e => setData(e.target.value)} value={data}/>
            <span>Hora:</span>
            <input type="time" onChange={e => setHora(e.target.value)} value={hora}></input>

            </S.Date>
          </div>
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


      <Footer />
    </S.Container >
  );
}

export default TaskDetails;
