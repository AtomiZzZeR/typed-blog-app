import React, { FC } from 'react';
import { PostItem } from '../PostItem';
import { IPost } from '../types/typex';
import Styled from './PostList.styles';

interface IPostListProps {
  posts: IPost[];
}

const PostList: FC<IPostListProps> = ({ posts }) => {
  return (
    <Styled.Wrapper>
      {posts.map((post, index) => (
        <PostItem post={post} key={post.id} number={index + 1} />
      ))}
    </Styled.Wrapper>
  );
};

export default PostList;
