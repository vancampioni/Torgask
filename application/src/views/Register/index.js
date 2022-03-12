import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';

import api from '../../services/api';

import swal from 'sweetalert';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

  const validate = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().required("Campo obrigatório").email(),
    senha: Yup.string().required("Campo obrigatório").min(8, "Senha deve conter no mínimo 8 caracteres")
  })

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
      } else {
        swal({
          title: "Não foi possível concluir o cadastro!",
          text: "Verifique os dados e tente novamente.",
          icon: "error",
          button: "Fechar",
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

        <Formik
          validationSchema={validate}
          initialValues={{
            nome: '',
            email: '',
            senha: ''
          }}
        >
          {({errors}) => (
            <div className="login-page">
              <div className="form">
                <Form className="login-form">
                  <Field
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)} />
                  {errors.nome && (
                  <li className='field'>{errors.nome}</li>
                )}

                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                  {errors.email && (
                  <li className='field'>{errors.email}</li>
                )}

                  <Field
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)} />
                  {errors.senha && (
                  <li className='field'>{errors.senha}</li>
                )}

                  <button type='button' className="btn btn-primary" onClick={register}>CADASTRAR</button>

                </Form>
              </div>
            </div>
          )}
        </Formik>



      </S.Form>
      <Footer />
    </S.Container>
  );
}

export default Register;
