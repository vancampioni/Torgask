import React from 'react';
import * as S from './styled';

function TaskDetailsCard({nome, anotacao, assunto, data_agendada, estado}) {

    return (
        <S.DetailsArea>
            <S.DetailsBox>

                <div className='nome-tarefa'>
                    <h3>{nome}</h3>
                </div>
                <div className='anotacao-tarefa'>
                    <div className='texto-anotacao'>{anotacao}</div>
                </div>
                <div className='assunto-tarefa'>
                    <div className='texto-assunto'>{assunto}</div>
                </div>
                <div className='data-tarefa'>
                    <S.Date>
                        <span>Data:</span>
                        <span>{data_agendada}</span>

                    </S.Date>
                </div>
                <div className='concluida'>
                    <div>Concluída
                        <input type='checkbox' value={estado} />
                    </div>
                    <div className='buttons'>
                        <button className='action-button' type='button' >EDITAR</button>
                        <button id='excluir-button' className='action-button' type='button'  >EXCLUIR</button>
                    </div>
                </div>
            </S.DetailsBox>
        </S.DetailsArea >
    )
}

export default TaskDetailsCard;