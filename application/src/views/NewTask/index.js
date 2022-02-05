import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { format } from 'date-fns';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NewTask({match}) {
    const [lateCount, setLateCount] = useState();
    const [id, setId] = useState();
    // const [goal_id, setGoalId] = useState();
    const [estado, setEstado] = useState(false);
    const [nome, setNome] = useState();
    const [anotacao, setAnotacao] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();

  async function lateVerify() {
    await api.get(`/goals/1/tasks/filter/late`)
    .then(response => {
      setLateCount(response.data.length)
    })
  };

  // async function LoadTaskDetails() {
  //   await api.get(`/goals/1/tasks/${match.params.id}`)
  //   .then(response => {
  //     alert(setNome(response.data.nome))
  //     setAnotacao(response.data.anotacao)
  //     setEstado(response.data.estado)
  //     setData(format(new Date(response.data.data_agendada), 'yyyy-MM-dd'))
  //     setHora(format(new Date(response.data.data_agendada), 'HH:mm'))
    
  // })
// }

  async function Save() {
    await api.post('/goals/1/tasks', {
      nome,
      anotacao,
      estado,
      data_agendada: `${data}T${hora}`,
    }).then(() => alert('TAREFA CADASTRADA COM SUCESSO!')
    )
  }

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify();
    // LoadTaskDetails();
  }, [])

    return (
      <S.Container>
        <Header lateCount={lateCount} />
        
        <S.Title>
          <h3> NOVA TAREFA </h3>
        </S.Title>

        <S.Form>
            <S.Input>
            <h4>Título</h4>
            <input type="text" onChange={e => setNome(e.target.value)} value={nome}/>
            {/* <h4>Meta</h4>
            <input type="text" onChange={e => setGoalId(e.target.value)} value={goal_id}/> */}


            </S.Input>
            <S.TextArea>
            <textarea rows={5} placeholder="Anotações: " 
              onChange={e => setAnotacao(e.target.value)} value={anotacao}/>

            </S.TextArea>
            <S.Date>
            <span>Data:</span>
            <input type="date" onChange={e => setData(e.target.value)} value={data}/>
            <span>Hora:</span>
            <input type="time" onChange={e => setHora(e.target.value)} value={hora}></input>

            </S.Date>
            <S.Options>
                <div>
                
                <p><input type="checkbox" checked={estado} onChange={() => setEstado(!estado)}/>Concluída</p>
                </div>
                
                <span><button id="confirmar" type="button" onClick={Save}>CONFIRMAR</button></span>
                
                
                <span><button id="cancelar" type="button">CANCELAR</button></span>
                
            </S.Options>

            
        </S.Form>

        <Footer />
      </S.Container>
    );
  }
  
  export default NewTask;
  