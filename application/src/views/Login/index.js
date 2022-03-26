import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo-roxo.png';
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

// COMPONENTES
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function Login() {
  
  const history = useHistory();

  const handleSubmit = values => {
    api.post('/auth', values)
      .then(resp => {
        const { data } = resp
        if (data) {
          localStorage.setItem('app-token', data)
          history.push(`/home`)
        }
      })
  }

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    senha: yup.string().min(8).required()
  })

  return (
    <S.Container>

      <S.RightSide>
        <span>Primeiro Acesso?</span>
        <Link to='/register'>
          <button type='button'>CADASTRE-SE</button>
        </Link>
      </S.RightSide>

      <S.Login>
        <S.Logo>
          <img src={logo} alt="Logo" />
        </S.Logo>
        <div className="login-page">
          <div className="form">
            <Formik
              initialValues={{}}
              onSubmit={handleSubmit}
              validationSchema={validations}
            >
              <Form className="login-form">
                <Field type="text" name="email" placeholder="E-mail" />
                <ErrorMessage
                  component="li"
                  name="email"
                  className="Login-Error"
                />
                <Field type="password" name="senha" placeholder="Senha" />
                <ErrorMessage
                  component="li"
                  name="senha"
                  className="Login-Error"
                />
                <button type='submit'>ENTRAR</button>
              </Form>

            </Formik>
          </div>
        </div>
      </S.Login>
      <Footer />
    </S.Container>
  );
}

export default Login;
