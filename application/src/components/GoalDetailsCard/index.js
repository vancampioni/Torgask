import React, { useEffect, useState } from 'react';
import * as S from './styled';
import api from '../../services/api';
import { useParams, useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';


function GoalDetailsCard(props) {
    const { id } = useParams();
     let name = props.nome
    const [initialValues, setInitialValues]  = useState({
        nome: name,
        descricao: props.descricao,
        data_inicio: props.data_inicio,
        data_fim: props.data_fim,
        estado: props.estado
    }) 
    useEffect(() => {
        setInitialValues()
        console.log(initialValues)
    }, [initialValues])
    const [values, setValues] = useState(initialValues);
    console.log(initialValues)

    function onChange(name, value) {
        // const { name, values } = event.target;
        //console.log(nome)
        // console.log(value)

        setValues({...initialValues, name: value})
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

    return (
        <S.DetailsArea>
            <S.DetailsBox>
                <div className='nome-meta'>
                    <input name='nome' placeholder={props.nome} onChange={e => onChange(e.target.name, e.target.value)}/>
                </div>
                <div className='anotacao-meta'>
                    <input className='texto-anotacao' name='descricao' value={props.descricao} onChange={onChange}/>
                </div>

                <S.Date>
                    <span>Data Início:</span>
                    <input name='data_inicio' value={props.data_inicio}  onChange={onChange}/>

                    <span>Data Fim:</span>
                    <input name='data_fim' value={props.data_fim} onChange={onChange}/>

                </S.Date>
                <div className='concluida'>
                    <div>Concluída
                        <input name='estado' type='checkbox' value={props.estado} onChange={onChange}/>
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