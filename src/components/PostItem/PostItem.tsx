import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { PostActionList } from '../../feature/post/postSlice';
import { IPost } from '../types/typex';
import Styled from './PostItem.styles';

interface IPostItemProps {
  post: IPost;
  number: number;
}

const PostItem: FC<IPostItemProps> = ({ post, number }) => {
  const dispatch = useDispatch();

  const handleRemovePostClick = () => {
    dispatch(PostActionList.removePost(post.id));
  };

  return (
    <Styled.Wrapper>
      <div>
        {number}. {post.title}
        <div>{post.body}</div>
      </div>
      <div>
        <button onClick={handleRemovePostClick}>Удалить</button>
      </div>
    </Styled.Wrapper>
  );
};

export default PostItem;
