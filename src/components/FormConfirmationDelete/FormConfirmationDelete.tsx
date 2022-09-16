import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PostActionList, selectPost } from '../../feature/post/postSlice';
import { IPost } from '../types/typex';
import Styled from './FormConfirmationDelete.styles';

const FormConfirmationDelete: FC = () => {
  const dispatch = useDispatch();

  const postSelector = useSelector(selectPost);

  const { idEditablePost } = postSelector;

  console.log(idEditablePost);

  const handleConfirmDeletePost = () => {
    dispatch(PostActionList.removePost(idEditablePost));
    dispatch(PostActionList.removeWindow());
  };

  const handleCancelDeletePost = () => {
    dispatch(PostActionList.removeWindow());
  };

  return (
    <Styled.Wrapper>
      <Styled.Message>Do you really want to delete this post?</Styled.Message>

      <Styled.BoxForButtons>
        <Styled.Button onClick={handleConfirmDeletePost}>Delete</Styled.Button>
        <Styled.Button onClick={handleCancelDeletePost}>Cancel</Styled.Button>
      </Styled.BoxForButtons>
    </Styled.Wrapper>
  );
};

export default FormConfirmationDelete;
