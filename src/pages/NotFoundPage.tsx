import React from 'react';
import { Link } from 'react-router-dom';
import Styled from './Page.styles';

const NotFoundPage = () => {
  return (
    <Styled.Wrapper>
      NotFoundPage <Link to={'/'}>Link</Link>
    </Styled.Wrapper>
  );
};

export default NotFoundPage;
