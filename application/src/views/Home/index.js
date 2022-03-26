import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';
import smile from '../../assets/smile-wink.png';

import api from '../../services/api';


// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [lateCount, setLateCount] = useState(false);
  const [filterActived, setFilterActived] = useState('index');
  const { id } = useParams();
  
  async function lateVerify() {
    await api.get(`/tasks/filter/late`)
    .then(response => {
      setLateCount(response.data.length)
    })
  };

  

  function Notification() {
    setFilterActived('late');
  };

  // Recarregar as atividades na tela quando o filtro mudar
  useEffect(() => {
    lateVerify()
  }, [filterActived])
  
    return (
      <S.Container>
        <Header lateCount={lateCount} clickNotification={Notification} />
          <S.Text>
            <h1>Seja bem-vindx ao </h1>
            
              <img id='logo' src={logo} alt="Logo" />
           
            <h1>!</h1>
            <div>
            <h3>
              seu gerenciador de tarefas 
              <img id='smile-wink' src={smile} alt="Carinha feliz!" />
            </h3>
            
            </div>
            <p>Para começar, clique no botão abaixo e assista ao nosso tutorial de primeiros passos:</p>
            <button type='button'>PRIMEIROS PASSOS</button>
          </S.Text>
        <Footer />
      </S.Container>
    );
  }
  
  export default Home;
  