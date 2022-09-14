import React, { FC } from 'react';
import { IPost } from '../types/typex';
import Styled from './PostList.styles';

interface IPostListProps {
  posts: IPost[];
}

const PostList: FC<IPostListProps> = ({ posts }) => {
  return (
    <Styled.Wrapper>
      {posts.map((post) => (
        <div key={post.id}>
          <div>
            {post.id}. {post.title}
            <div>{post.body}</div>
          </div>
          <div>
            <button>Удалить</button>
          </div>
        </div>
      ))}
    </Styled.Wrapper>
  );
};

export default PostList;
