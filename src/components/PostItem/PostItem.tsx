import React, { FC } from 'react';
import { IPost } from '../types/typex';
import Styled from './PostItem.styles';

interface IPostItemProps {
  post: IPost;
  number: number;
}

const PostItem: FC<IPostItemProps> = ({ post, number }) => {
  return (
    <Styled.Wrapper>
      <div>
        {number}. {post.title}
        <div>{post.body}</div>
      </div>
      <div>
        <button>Удалить</button>
      </div>
    </Styled.Wrapper>
  );
};

export default PostItem;
