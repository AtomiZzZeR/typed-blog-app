import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActionList } from '../../feature/post/postSlice';
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
import { selectAuth } from '../../feature/auth/authSlice';

interface ICommentItemProps {
  postId: string;
  comment: IComment;
}

const CommentItem: FC<ICommentItemProps> = ({ postId, comment }) => {
  const dispatch = useDispatch();

  const authSelector = useSelector(selectAuth);
  const { currentUserId } = authSelector;

  const commentSelector = useSelector(selectComment);
  const { currentCommentId, isFormEditComment, isEdit } = commentSelector;

  const handleOpenEditComment = () => {
    dispatch(commentActionList.setCurrentCommentId(comment.id));

    dispatch(commentActionList.openFormEditComment());
  };

  return (
    <Styled.Wrapper>
      <Styled.UserId>user id: {comment.userId}</Styled.UserId>

      <Styled.Description>
        {comment.description} {isEdit ? <span>(.ред)</span> : null}
      </Styled.Description>

      {isFormEditComment && currentCommentId === comment.id ? (
        <EditComment postId={postId} comment={comment} />
      ) : null}

      {currentUserId === comment.userId ? (
        <Styled.ButtonEdit onClick={handleOpenEditComment}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Styled.ButtonEdit>
      ) : null}

      {currentUserId === comment.userId ? (
        <Styled.ButtonDelete
          onClick={() => {
            dispatch(
              postActionList.deleteComment({ postId, commentId: comment.id })
            );
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </Styled.ButtonDelete>
      ) : null}
    </Styled.Wrapper>
  );
};

export default CommentItem;
