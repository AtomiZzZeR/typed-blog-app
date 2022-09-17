import { FC } from 'react';
import { IComment } from '../types/typex';
import Styled from './CommentItem.styles';

interface ICommentItemProps {
  commentList: IComment[];
}

const CommentItem: FC<ICommentItemProps> = ({ commentList }) => {
  return (
    <>
      {commentList.map((comment) => (
        <Styled.Comment key={comment.id}>{comment.body}</Styled.Comment>
      ))}
    </>
  );
};

export default CommentItem;
