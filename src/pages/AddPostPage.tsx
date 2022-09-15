import React from 'react';
import { AddPost } from '../components/AddPost';
import Styled from './Page.styles';

const AddPostPage = () => {
  return (
    <Styled.Wrapper>
      <AddPost />
    </Styled.Wrapper>
  );
};

export default AddPostPage;
