import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { PostActionList } from '../../feature/post/postSlice';
import { IComment } from '../types/types';
import Styled from './CommentItem.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

interface ICommentItemProps {
  postId: string;
  comment: IComment;
}

const CommentItem: FC<ICommentItemProps> = ({ postId, comment }) => {
  const dispatch = useDispatch();

  return (
    <Styled.Wrapper>
      {comment.body}
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
