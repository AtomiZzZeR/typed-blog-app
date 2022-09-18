import React from 'react';
import { useDispatch } from 'react-redux';
import { authActionList } from '../../feature/auth/authSlice';
import Styled from './Login.styles';

const Login = () => {
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(authActionList.login());
  };

  return (
    <Styled.Wrapper>
      <Styled.BoxInputs>
        <Styled.Input type={'text'} placeholder={'email'}/>
        <Styled.Input type={'password'} placeholder={'password'}/>
      </Styled.BoxInputs>
      <Styled.Button onClick={handleLoginClick}>Login</Styled.Button>
    </Styled.Wrapper>
  );
};

export default Login;
