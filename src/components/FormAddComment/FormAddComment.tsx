import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { commentActionList } from '../../feature/comment/commentSlice';
import Styled from './FormAddComment.styles';
import { v4 as uuid } from 'uuid';
import { IComment } from '../types/typex';
import { PostActionList } from '../../feature/post/postSlice';

interface IFormAddCommentsProps {
  postId: string;
}

const FormAddComment: FC<IFormAddCommentsProps> = ({ postId }) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState<string>('');

  const handleCommentBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();

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
      <input type={'text'} value={comment} onChange={handleCommentBodyChange} />

      <div>
        <button onClick={handleAddComment}>Submit</button>
        <button onClick={handleCancelAddComment}>Cancel</button>
      </div>
    </Styled.Form>
  );
};

export default FormAddComment;
