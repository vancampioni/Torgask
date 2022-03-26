import React, { useEffect, useState } from 'react';
import * as S from './styled';
import api from '../../services/api';
import { useParams, useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';


function GoalDetailsCard() {
    const { id } = useParams();
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [data_inicio, setDataInicio] = useState();
    const [data_fim, setDataFim] = useState();
    const [estado, setEstado] = useState();
    
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

      async function Update() {
        await api.put(`/goals/${id}`, {
            nome,
            descricao,
            data_inicio,
            data_fim,
            estado
          })
        .then(
            swal({
                title: "Meta atualizada com sucesso!",
                icon: "success",
                button: "OK",
              })
        )
    }  
    
    async function Remove() {
        const res = window.confirm('Deseja realmente remover a meta?')
        if (res == true) {
            await api.delete(`/goals/${id}`)
                .then(
                    swal({
                        title: "Meta removida com sucesso!",
                        icon: "success",
                        button: "OK",
                    })
                )
        }
    }

    useEffect(() => {
        loadGoalDetails();
      }, [])

    return (
        <S.DetailsArea>
            <S.DetailsBox>
                <div className='nome-meta'>
                    <input name='nome' value={nome} onChange={nome => setNome(nome.target.value)}/>
                </div>
                <div className='anotacao-meta'>
                    <input className='texto-anotacao' name='descricao' value={descricao} onChange={descricao => setDescricao(descricao.target.value)}/>
                </div>

                <S.Date>
                    <span>Data Início:</span>
                    <input name='data_inicio' value={data_inicio} onChange={data_inicio => setDataInicio(data_inicio.target.value)}/>

                    <span>Data Fim:</span>
                    <input name='data_fim' value={data_fim} onChange={data_fim => setDataFim(data_fim.target.value)}/>

                </S.Date>
                <div className='concluida'>
                    <div>Concluída
                        <input name='estado' type='checkbox' value={estado} onChange={estado => setEstado(estado.target.value)}/>
                    </div>

                    <div className='buttons'>
                        <Link to='/goals'>
                            <button className='action-button' type='button' onClick={Update}>SALVAR</button>
                            <button id='excluir-button' className='action-button' type='button' onClick={Remove}>EXCLUIR</button>
                        </Link>
                    </div>
                </div>
            </S.DetailsBox>


        </S.DetailsArea >
    )
}

export default GoalDetailsCard;