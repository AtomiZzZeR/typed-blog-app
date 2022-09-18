import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { commentActionList } from '../../feature/comment/commentSlice';
import { PostActionList } from '../../feature/post/postSlice';
import { IComment } from '../types/types';
import Styled from './EditComment.styles';

interface IEditComentProps {
  postId: string;
  comment: IComment;
}

const EditComment: FC<IEditComentProps> = ({ postId, comment }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>(comment.body);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleApplyEditClick = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      PostActionList.editComment({ postId, commentId: comment.id, value })
    );

    dispatch(commentActionList.closeFormEditComment());
  };

  const handleCancelEditClick = (e: FormEvent) => {
    e.preventDefault();

    dispatch(commentActionList.closeFormEditComment());
  };

  return (
    <Styled.Form>
      <Styled.Input type={'text'} value={value} onChange={handleChange} />
      <Styled.Button onClick={handleApplyEditClick}>Submit</Styled.Button>
      <Styled.Button onClick={handleCancelEditClick}>Cancel</Styled.Button>
    </Styled.Form>
  );
};

export default EditComment;
