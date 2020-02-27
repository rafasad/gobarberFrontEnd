import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome e obrigatioria'),
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail e obrigatoio'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('A senha e obrigatioria'),
});

export default function SignUp() {
  const disapatch = useDispatch();

  function handleSubmit(name, email, password) {
    disapatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Ja tenho Login</Link>
      </Form>
    </>
  );
}
