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

function TaskDetails() {
    const [lateCount, setLateCount] = useState();
    const [filterActived, setFilterActived] = useState('late');
    const [value, setValue] = React.useState([null, null]);

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
                    <div className='data-meta'>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateRangePicker
                                startText="Check-in"
                                endText="Check-out"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField {...startProps} />
                                        <Box sx={{ mx: 2 }}> to </Box>
                                        <TextField {...endProps} />
                                    </React.Fragment>
                                )}
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
