import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { format } from 'date-fns';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Dropdown } from 'bootstrap';

function NewTask() {
  const [lateCount, setLateCount] = useState();
  const [goal_id, setGoalId] = useState([]);
  const [goal, setGoal] = useState([]);
  const [estado, setEstado] = useState(false);
  const [nome, setNome] = useState();
  const [anotacao, setAnotacao] = useState();
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const history = useHistory();

  async function lateVerify() {
    await api.get(`/tasks/filter/late`)
      .then(response => {
        setLateCount(response.data.length)
      })
  };

  async function loadGoals() {
    await api.get("/goals")
    .then(response => {
      setGoal(response.data)
    })
  }


  async function Save() {
    await api.post('/task', {
      nome,
      anotacao,
      estado,
      data_agendada: `${data}T${hora}`,
      goal
      
    }).then(
      (response) => {
        if (response.status == 200) {
          swal({
            title: "Tarefa cadastrada com sucesso!",
            icon: "success",
            button: "OK",
          })
            .then((value) => {
              history.push('tasks')
            })
        }
      }
    )
  }

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify();
    loadGoals();
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
          <input type="text" onChange={e => setNome(e.target.value)} value={nome} />



        </S.Input>
        <S.TextArea>
          <textarea rows={5} placeholder="Anotações: "
            onChange={e => setAnotacao(e.target.value)} value={anotacao} />

        </S.TextArea>
        <S.Date>
          <span>Data:</span>
          <input type="date" onChange={e => setData(e.target.value)} value={data} />
          <span>Hora:</span>
          <input type="time" onChange={e => setHora(e.target.value)} value={hora}></input>

        </S.Date>
        <S.Options>
          <div>
            <p><input type="checkbox" checked={estado} onChange={() => setEstado(!estado)} />Concluída</p>
          </div>
          <div className='dropdown'>
            <select >
              {
                goal.map(g => (
                  <option onChange={e => setGoal(e.target.value)} value={goal.id}>{g.nome}</option>
                ))
              }
            </select>
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
