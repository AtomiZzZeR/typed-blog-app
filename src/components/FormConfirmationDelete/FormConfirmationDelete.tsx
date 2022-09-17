import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PostActionList, selectPost } from '../../feature/post/postSlice';
import Styled from './FormConfirmationDelete.styles';

const FormConfirmationDelete: FC = () => {
  const dispatch = useDispatch();

  const postSelector = useSelector(selectPost);

  const { currentPostId } = postSelector;

  const handleConfirmDeletePost = () => {
    dispatch(PostActionList.deletePost(currentPostId));

    dispatch(PostActionList.closeWindow());
  };

  const handleCancelDeletePost = () => {
    dispatch(PostActionList.closeWindow());
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
