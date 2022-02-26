import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@date-io/date-fns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';


import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function TaskDetails() {
  const [lateCount, setLateCount] = useState();
  const [filterActived, setFilterActived] = useState('late');
  const [value, setValue] = React.useState(new Date());

  async function lateVerify() {
    await api.get(`/goals/:goal_id/tasks/filter/late`)
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
          <div className='assunto-tarefa'>
            <h4>Assunto:</h4>
            <button type='button'>C#</button>
          </div>
          <div className='data-tarefa'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
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
