import React from 'react';
import { Link } from 'react-router-dom';
import { NotFound } from '../components/NotFound';
import Styled from './Page.styles';

const NotFoundPage = () => {
  return (
    <Styled.Wrapper>
      <NotFound />
    </Styled.Wrapper>
  );
};

export default NotFoundPage;
