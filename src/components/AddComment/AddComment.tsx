import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentActionList } from '../../feature/comment/commentSlice';
import Styled from './AddComment.styles';
import { v4 as uuid } from 'uuid';
import { IComment } from '../types/types';
import { postActionList } from '../../feature/post/postSlice';
import { selectAuth } from '../../feature/auth/authSlice';

interface IAddCommentProps {
  postId: string;
}

const AddComment: FC<IAddCommentProps> = ({ postId }) => {
  const dispatch = useDispatch();

  const authSelector = useSelector(selectAuth);
  const { currentUserId: userId } = authSelector;

  const [description, setDescription] = useState<string>('');

  const [msgValidate, setMsgValidate] = useState<string>('');

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(e.target.value);
  };

  const handleAddClick = (e: FormEvent): void => {
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
      likeList: [],
    };

    dispatch(postActionList.addComment({ postId, newComment }));

    dispatch(commentActionList.closeAddComment());
  };

  const handleCancelClick = (e: FormEvent): void => {
    e.preventDefault();

    dispatch(commentActionList.closeAddComment());
  };

  return (
    <Styled.Form>
      <Styled.Input
        type={'text'}
        placeholder={'description'}
        value={description}
        onChange={handleDescriptionChange}
      />

      <Styled.MsgValidate>{msgValidate}</Styled.MsgValidate>

      <Styled.BoxForBtns>
        <Styled.Btn onClick={handleAddClick}>Submit</Styled.Btn>
        <Styled.Btn onClick={handleCancelClick}>Cancel</Styled.Btn>
      </Styled.BoxForBtns>
    </Styled.Form>
  );
};

export default AddComment;
