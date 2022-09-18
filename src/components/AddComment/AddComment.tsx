import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentActionList } from '../../feature/comment/commentSlice';
import Styled from './AddComment.styles';
import { v4 as uuid } from 'uuid';
import { IComment } from '../types/types';
import { PostActionList } from '../../feature/post/postSlice';
import { selectAuth } from '../../feature/auth/authSlice';

interface IAddCommentsProps {
  postId: string;
}

const AddComment: FC<IAddCommentsProps> = ({ postId }) => {
  const dispatch = useDispatch();

  const authSelector = useSelector(selectAuth);
  const { currentUserId: userId } = authSelector;

  const [description, setDescription] = useState<string>('');

  const [msgValidate, setMsgValidate] = useState<string>('');

  const handleCommentBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();

    if (description === '') {
      setMsgValidate('Error! Empty comment.');

      return;
    }

    const newComment: IComment = {
      userId,
      id: uuid(),
      description,
      creationDate: Date.now(),
    };

    dispatch(PostActionList.addComment({ postId, newComment }));

    dispatch(commentActionList.closeFormAddComment());
  };

  const handleCancelAddComment = (e: FormEvent) => {
    e.preventDefault();

    dispatch(commentActionList.closeFormAddComment());
  };

  return (
    <Styled.Form>
      <Styled.Input
        type={'text'}
        placeholder={'comment'}
        value={description}
        onChange={handleCommentBodyChange}
      />

      <Styled.MessageValidate>{msgValidate}</Styled.MessageValidate>

      <Styled.BoxForButtons>
        <Styled.Button onClick={handleAddComment}>Submit</Styled.Button>
        <Styled.Button onClick={handleCancelAddComment}>Cancel</Styled.Button>
      </Styled.BoxForButtons>
    </Styled.Form>
  );
};

export default AddComment;
