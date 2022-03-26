import React, { useState } from 'react';
import * as S from './styled';
import api from '../../services/api';
import { useParams, useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';


function GoalDetailsCard({ nome, descricao, data_inicio, data_fim, estado }) {
    const { id } = useParams();

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

    return (
        <S.DetailsArea>
            <S.DetailsBox>
                <div className='nome-meta'>
                    <input value={nome} />
                </div>
                <div className='anotacao-meta'>
                    <input className='texto-anotacao' value={descricao} />
                </div>

                <S.Date>
                    <span>Data Início:</span>
                    <input value={data_inicio} />

                    <span>Data Fim:</span>
                    <input value={data_fim} />

                </S.Date>
                <div className='concluida'>
                    <div>Concluída
                        <input type='checkbox' value={estado} />
                    </div>

                    <div className='buttons'>
                        <Link to='/goals'>
                            <button className='action-button' type='button' >SALVAR</button>
                            <button id='excluir-button' className='action-button' type='button' onClick={Remove}>EXCLUIR</button>
                        </Link>
                    </div>
                </div>
            </S.DetailsBox>


        </S.DetailsArea >
    )
}

export default GoalDetailsCard;