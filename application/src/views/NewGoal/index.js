import React, { useState, useEffect } from 'react';
import * as S from './styled';

import api from '../../services/api';

import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NewGoal() {
  const [lateCount, setLateCount] = useState();
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [estado, setEstado] = useState(false);
  const [data_inicio, setDataInicio] = useState();
  const [data_fim, setDataFim] = useState();
  const history = useHistory();

  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);

  const newGoal = () => {
    api.post("/goals", {
      nome: nome,
      descricao: descricao,
      estado: estado,
      data_inicio: data_inicio,
      data_fim: data_fim
    }).then((response) => {
      if (response.status == 200) {
        swal({
          title: "Meta cadastrada com sucesso!",
          icon: "success",
          button: "OK",
        })
          .then((value) => {
            history.push('goals')
          })
      }
    });
  };

  async function lateVerify() {
    await api.get(`/tasks/filter/late`)
      .then(response => {
        setLateCount(response.data.length)
      })
  };

  function Notification() {
    setFilterActived('late');
  }

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify();
  }, [filterActived])

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={Notification} />

      <S.Title>
        <h3> NOVA META </h3>
      </S.Title>

      <S.Form>
        <S.Input>
          <h4>Título</h4>
          <input
            type="text"
            onChange={e => setNome(e.target.value)}
            value={nome}
          />


        </S.Input>
        <S.TextArea>
          <textarea
            rows={5}
            placeholder="Descrição: "
            onChange={e => setDescricao(e.target.value)}
            value={descricao}
          />

        </S.TextArea>
        <S.Date>
          <span>Duração Estimada:</span>
          <input type="date" onChange={e => setDataInicio(e.target.value)} value={data_inicio} />
          <span>Até:</span>
          <input type="date" onChange={e => setDataFim(e.target.value)} value={data_fim} />

        </S.Date>
        <S.Options>
          <div>

            <p><input type="checkbox"
              onChange={e => setEstado(e.target.value)} value={estado} />Concluída</p>
          </div>

          <span><button id="confirmar" type="button" onClick={newGoal}>CONFIRMAR</button></span>


          <span><button id="cancelar" type="button" onClick="/goals">CANCELAR</button></span>

        </S.Options>


      </S.Form>

      <Footer />
    </S.Container>
  );
}

export default NewGoal;
