import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postActionList, selectPost } from '../../feature/post/postSlice';
import Styled from './ConfirmDelete.styles';

const ConfirmDelete: FC = () => {
  const dispatch = useDispatch();

  const postSelector = useSelector(selectPost);

  const { currentPostId } = postSelector;

  const handleConfirmDeletePost = () => {
    dispatch(postActionList.deletePost(currentPostId));

    dispatch(postActionList.closeWindow());
  };

  const handleCancelDeletePost = () => {
    dispatch(postActionList.closeWindow());
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

export default ConfirmDelete;
