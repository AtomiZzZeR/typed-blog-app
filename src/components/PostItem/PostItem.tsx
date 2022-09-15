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
      <Styled.Title>
        {number}. {post.title}
      </Styled.Title>
      <Styled.Content>{post.body}</Styled.Content>
      <Styled.ButtonDelete onClick={handleRemovePostClick} />
    </Styled.Wrapper>
  );
};

export default PostItem;
