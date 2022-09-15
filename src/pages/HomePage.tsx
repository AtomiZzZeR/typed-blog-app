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
      <Styled.Container>
        <Styled.TitlePostList>Post List</Styled.TitlePostList>
        {posts.length ? (
          <PostList />
        ) : (
          <Styled.MessagePostsNotFound>
            Posts not found
          </Styled.MessagePostsNotFound>
        )}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default HomePage;
