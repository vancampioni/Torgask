import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';

import api from '../../services/api';

import swal from 'sweetalert';

// COMPONENTES
import Footer from '../../components/Footer';
import { useHistory } from 'react-router-dom';

function Register() {

  const [nomeReg, setNomeReg] = useState();
  const [emailReg, setEmailReg] = useState();
  const [senhaReg, setSenhaReg] = useState();

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const [loginStatus, setLoginStatus] = useState();

  const history = useHistory();

  api.defaults.withCredentials = false;

  const register = () => {
    api.post("/users", {
      nome: nome,
      email: email,
      senha: senha
    }).then((response) => {
      if (response.status == 200) {
        swal({
          title: "Cadastrado com sucesso!",
          text: "Realize o login para continuar.",
          icon: "success",
          button: "Fechar",
        })
          .then((value) => {
            history.push('authenticate')
          })
      }
    });
  };

  return (
    <S.Container>


      <S.Form>
        <S.Logo>
          <img src={logo} alt="Logo" />
        </S.Logo>
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <input type="text" placeholder="Usuário" value={nome} onChange={e => setNome(e.target.value)} />
              <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />

              <button type='button' class="btn btn-primary" onClick={register}>CADASTRAR</button>

            </form>


          </div>
        </div>

        {/* <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Título do modal</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
              <Link to='/authenticate'>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" >Fechar</button>
              </Link>
              </div>
            </div>
          </div>
        </div> */}

      </S.Form>
      <Footer />
    </S.Container>
  );
}

export default Register;
