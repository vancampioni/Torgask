import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';

import api from '../../services/api';

import swal from 'sweetalert';
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup';

// COMPONENTES
import Footer from '../../components/Footer';
import { useHistory } from 'react-router-dom';

function Register() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

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
          history.push('login')
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
  
  const validations = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    senha: yup.string().min(8).required()
  })
  
  return (
    <S.Container>


      <S.Form>
        <S.Logo>
          <img src={logo} alt="Logo" />
        </S.Logo>

        <Formik
          validationSchema={validations}
          initialValues={{}}
        >
          
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
                  <ErrorMessage
                  component="li"
                  name="nome"
                  className="Login-Error"
                />

                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                  <ErrorMessage
                  component="li"
                  name="email"
                  className="Login-Error"
                />

                  <Field
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)} />
                 <ErrorMessage
                  component="li"
                  name="senha"
                  className="Login-Error"
                />

                  <button type='button' className="btn btn-primary" onClick={register}>CADASTRAR</button>

                </Form>
              </div>
            </div>
         
        </Formik>



      </S.Form>
      <Footer />
    </S.Container>
  );
}

export default Register;
