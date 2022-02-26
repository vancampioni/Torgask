import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
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

function GoalDetails() {
    const [lateCount, setLateCount] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);

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
                    <div className='assunto-meta'>
                        <h4>Assunto:</h4>
                        <button type='button'>C#</button>

                        <div className='nova-tarefa'>
                          <img id='cadastrar-tarefa' src={plusBlack} alt="Cadastrar Tarefa" /> 
                          <span> Nova Tarefa</span>
                        </div>
                    </div>
                    <S.Date>
            <span>Data:</span>
            <input type="date" onChange={e => setData(e.target.value)} value={data}/>
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


            <Footer />
        </S.Container >
    );
}

export default GoalDetails;
