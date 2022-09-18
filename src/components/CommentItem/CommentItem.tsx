import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostActionList } from '../../feature/post/postSlice';
import { IComment } from '../types/types';
import Styled from './CommentItem.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';
import { EditComment } from '../EditComment';
import {
  commentActionList,
  selectComment,
} from '../../feature/comment/commentSlice';
import { useSelector } from 'react-redux';

interface ICommentItemProps {
  postId: string;
  comment: IComment;
}

const CommentItem: FC<ICommentItemProps> = ({ postId, comment }) => {
  const dispatch = useDispatch();

  const commentSelector = useSelector(selectComment);

  const { currentCommentId, isFormEditComment } = commentSelector;

  const handleOpenEditComment = () => {
    dispatch(commentActionList.setCurrentCommentId(comment.id));

    dispatch(commentActionList.openFormEditComment());
  };

  return (
    <Styled.Wrapper>
      {comment.body}

      {isFormEditComment && currentCommentId === comment.id ? (
        <EditComment postId={postId} comment={comment} />
      ) : null}

      {isFormEditComment && currentCommentId === comment.id ? null : (
        <Styled.ButtonEdit onClick={handleOpenEditComment}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Styled.ButtonEdit>
      )}

      <Styled.ButtonDelete
        onClick={() => {
          dispatch(
            PostActionList.deleteComment({ postId, commentId: comment.id })
          );
        }}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </Styled.ButtonDelete>
    </Styled.Wrapper>
  );
};

export default CommentItem;
