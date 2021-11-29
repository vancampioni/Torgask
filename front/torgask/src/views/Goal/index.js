import React, { useState, useEffect } from 'react';
import * as S from './styled';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NewTask() {
    const [lateCount, setLateCount] = useState();
    const [id, setId] = useState();
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

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify();
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
            <h4>Meta</h4>
            <input type="text" />


            </S.Input>
            <S.TextArea>
            <textarea rows={5} placeholder="Anotações: "/>

            </S.TextArea>
            <S.Date>
            <span>Data:</span>
            <input type="date"></input>
            <span>Hora:</span>
            <input type="time"></input>

            </S.Date>
            <S.Options>
                <div>
                
                <p><input type="checkbox"/>Concluída</p>
                </div>
                
                <span><button id="confirmar" type="button">CONFIRMAR</button></span>
                
                
                <span><button id="cancelar" type="button">CANCELAR</button></span>
                
            </S.Options>

            
        </S.Form>

        <Footer />
      </S.Container>
    );
  }
  
  export default NewTask;
  