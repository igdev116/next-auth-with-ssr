import { ChangeEvent, FormEvent, useState } from 'react';
import Router from 'next/router';

import { FAKE_USER, ROUTES } from '~/constants';
import { axiosClient } from '~/apis';

import { Meta } from '~/layouts';
import { Button, Form, H1, Input } from './styles';

interface LoginData {
  success: boolean;
  message: string;
}

const Login = () => {
  const [formData, setFormData] = useState({
    username: FAKE_USER.NAME,
    password: FAKE_USER.PASSWORD,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: LoginData = await axiosClient.post('login', formData);

    if (data.success) Router.push(ROUTES.HOME);
    else alert(`Username: ${FAKE_USER.NAME} \nPassword: ${FAKE_USER.PASSWORD}`);
  };

  return (
    <Meta title='Login'>
      <Form onSubmit={onSubmit}>
        <H1>Login</H1>
        <Input
          autoComplete='off'
          name='username'
          value={formData.username}
          onChange={handleInputChange}
          placeholder='Username'
        />
        <Input
          autoComplete='off'
          name='password'
          value={formData.password}
          type='password'
          onChange={handleInputChange}
          placeholder='Password'
        />
        <Button>Login</Button>
      </Form>
    </Meta>
  );
};

export default Login;
