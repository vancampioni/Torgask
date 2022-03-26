import React, { useState, useEffect, useMemo } from 'react';
import * as S from './styled';
import api from '../../services/api';
import { useParams, Link } from 'react-router-dom';
import swal from 'sweetalert';
import format from 'date-fns/format';

function TaskDetailsCard({data_agendada}) {
    const { id } = useParams();
    const [nome, setNome] = useState();
    const [anotacao, setAnotacao] = useState();
    const [assunto, setAssunto] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [estado, setEstado] = useState();
    

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

    async function Remove(){
        const res = window.confirm('Deseja realmente remover a tarefa?')
        if(res == true){
          await api.delete(`/tasks/${id}`)
          .then(
            swal({
                title: "Tarefa removida com sucesso!",
                icon: "success",
                button: "OK",
              })
          )
        }
      }

    async function Update() {
        await api.put(`/tasks/${id}`, {
            nome,
            anotacao,
            assunto,
            estado,
            data
          })
        .then(
            swal({
                title: "Tarefa atualizada com sucesso!",
                icon: "success",
                button: "OK",
              })
        )
    }  

    useEffect(() => {
        loadTaskDetails();
      }, [])

    return (
        <S.DetailsArea>
            <S.DetailsBox>

                <div className='nome-tarefa'>
                    <input value={nome} onChange={nome => setNome(nome.target.value)}/>
                </div>
                <div className='anotacao-tarefa'>
                    <input className='texto-anotacao'value={anotacao} onChange={anotacao => setAnotacao(anotacao.target.value)}/>
                </div>
                <div className='assunto-tarefa'>
                    <span>Assunto:</span>
                    <input className='texto-assunto' value={assunto} onChange={assunto => setAssunto(assunto.target.value)}/>
                </div>
                <div className='data-tarefa'>
                    <S.Date>
                        <span>Data:</span>
                        <input value={data} onChange={data => setData(data.target.value)}/>

                    </S.Date>
                </div>
                <div className='concluida'>
                    <div>Concluída
                        <input type='checkbox' value={estado} onChange={estado => setEstado(estado.target.value)}/>
                    </div>
                    <div className='buttons'>
                        <Link to='/tasks'>
                        <button className='action-button' type='button' onClick={Update}>SALVAR</button>
                        <button id='excluir-button' className='action-button' type='button' onClick={Remove} >EXCLUIR</button>
                        </Link>
                    </div>
                </div>
            </S.DetailsBox>
        </S.DetailsArea >
    )
}

export default TaskDetailsCard;