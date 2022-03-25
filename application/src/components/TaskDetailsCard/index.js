import React from 'react';
import * as S from './styled';
import api from '../../services/api';
import { useParams, useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';

function TaskDetailsCard({nome, anotacao, assunto, data, estado}) {
    const { id } = useParams();
    const { history } = useHistory();

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

    return (
        <S.DetailsArea>
            <S.DetailsBox>

                <div className='nome-tarefa'>
                    <input value={nome}/>
                </div>
                <div className='anotacao-tarefa'>
                    <input className='texto-anotacao'value={anotacao}/>
                </div>
                <div className='assunto-tarefa'>
                    <span>Assunto:</span>
                    <input className='texto-assunto' value={assunto}/>
                </div>
                <div className='data-tarefa'>
                    <S.Date>
                        <span>Data:</span>
                        <input value={data}/>

                    </S.Date>
                </div>
                <div className='concluida'>
                    <div>Concluída
                        <input type='checkbox' value={estado} />
                    </div>
                    <div className='buttons'>
                        <Link to='/tasks'>
                        <button className='action-button' type='button' >SALVAR</button>
                        <button id='excluir-button' className='action-button' type='button' onClick={Remove} >EXCLUIR</button>
                        </Link>
                    </div>
                </div>
            </S.DetailsBox>
        </S.DetailsArea >
    )
}

export default TaskDetailsCard;