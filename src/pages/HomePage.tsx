import React from 'react';
import { useSelector } from 'react-redux';
import { PostList } from '../components/PostList';
import { selectPost } from '../feature/post/postSlice';
import Styled from './Page.styles';

const HomePage = () => {
  const postSelector = useSelector(selectPost);

  const { posts } = postSelector;

  return (
    <Styled.Wrapper>
      {posts.length ? <PostList /> : <div>Посты не найдены</div>}
    </Styled.Wrapper>
  );
};

export default HomePage;
