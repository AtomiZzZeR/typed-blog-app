import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { commentActionList } from '../../feature/comment/commentSlice';
import Styled from './AddComment.styles';
import { v4 as uuid } from 'uuid';
import { IComment } from '../types/types';
import { PostActionList } from '../../feature/post/postSlice';

interface IAddCommentsProps {
  postId: string;
}

const AddComment: FC<IAddCommentsProps> = ({ postId }) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState<string>('');

  const [msgValidate, setMsgValidate] = useState<string>('');

  const handleCommentBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();

    if (comment === '') {
      setMsgValidate('Error! Empty comment.');

      return;
    }

    const newComment: IComment = {
      id: uuid(),
      body: comment,
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
        value={comment}
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
