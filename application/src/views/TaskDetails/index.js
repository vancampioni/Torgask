import React, { useState, useEffect, useMemo } from 'react';
import * as S from './styled';
import {Redirect} from 'react-router-dom'

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

function TaskDetails() {
  const [lateCount, setLateCount] = useState();
  const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [filterActived, setFilterActived] = useState();
    const [tasks, setTasks] = useState([]);
    const [nome, setNome] = useState();
    const [anotacao, setAnotacao] = useState();
    const [assunto, setAssunto] = useState();
    const [estado, setEstado] = useState();
    const { id } = useParams();
    const idInt = parseInt(id);

    async function loadTasks() {
        await api.get(`/tasks/filter/index`)
        .then(response => {
          setNome(response.data.nome)
          setAnotacao(response.data.anotacao)
          setAssunto(response.data.assunto)
          setData(response.data.data)
          setHora(response.data.hora)
          setEstado(response.data.estado)
        })
      };

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
        loadTasks();
        lateVerify();
        loadTaskDetails();
      }, [])

  return (

    <S.Container>
      { redirect && <Redirect to="/tasks" /> }
      <Header lateCount={lateCount} clickNotification={Notification} />


      <S.Title>
        <h3>DETALHES DA TAREFA</h3>
      </S.Title>

      <S.DetailsArea>
        <S.DetailsBox>
          
          <div className='nome-tarefa'>
            <h3 
              onChange={e => setNome(e.target.value)}
            value={nome} >{setNome}</h3> 
          </div>
          <div className='anotacao-tarefa'>
            <div className='texto-anotacao'>{anotacao}</div>
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
              <input type='checkbox' value={estado}/>
            </div>
            <div className='buttons'>
              <button className='action-button' type='button' >EDITAR</button>
              <button id='excluir-button' className='action-button' type='button'  >EXCLUIR</button>
            </div>
          </div>
        </S.DetailsBox>
      </S.DetailsArea >


      <Footer />
    </S.Container >
  );
}

export default TaskDetails;
