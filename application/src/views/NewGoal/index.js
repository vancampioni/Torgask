import React, { useState, useEffect } from 'react';
import * as S from './styled';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NewTask() {
    const [lateCount, setLateCount] = useState();
    const [user_id, setUserId] = useState();
    const [estado, setEstado] = useState(false);
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [data_inicio, setDataInicio] = useState();
    const [data_fim, setDataFim] = useState();
    const [assunto, setAssunto] = useState();

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
          <h3> NOVA META </h3>
        </S.Title>

        <S.Form>
            <S.Input>
            <h4>Título</h4>
            <input type="text" onChange={e => setNome(e.target.value)} value={nome}/>


            </S.Input>
            <S.TextArea>
            <textarea rows={5} placeholder="Anotações: "/>

            </S.TextArea>
            <S.Date>
            <span>Duração Estimada:</span>
            <input type="date" onChange={e => setDataInicio(e.target.value)} value={data_inicio}/>
            <span>Até:</span>
            <input type="date" onChange={e => setDataFim(e.target.value)} value={data_fim}/>

            </S.Date>
            <S.Options>
                <p>Assunto: <input id="assunto" type="text"
                  onChange={e => setAssunto(e.target.value)} value={assunto}/></p>
                {/* <div>
                
                {/* <p><input type="checkbox" 
                  onChange={e => setEstado(e.target.value)} value={estado}/>Concluída</p>
                </div> */} 
                
                <span><button id="confirmar" type="button">CONFIRMAR</button></span>
                
                
                <span><button id="cancelar" type="button">CANCELAR</button></span>
                
            </S.Options>

            
        </S.Form>

        <Footer />
      </S.Container>
    );
  }
  
  export default NewTask;
  