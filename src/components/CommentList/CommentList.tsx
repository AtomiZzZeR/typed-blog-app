import _ from 'lodash';
import { FC } from 'react';
import { CommentItem } from '../CommentItem';
import { IComment } from '../types/types';

interface ICommentListProps {
  commentList: IComment[];
  postId: string;
}

const CommentList: FC<ICommentListProps> = ({ commentList, postId }) => {
  const sortedCommentList = _.sortBy(commentList, 'creationDate');

  return (
    <>
      {sortedCommentList.map((comment) => (
        <CommentItem comment={comment} postId={postId} key={comment.id} />
      ))}
    </>
  );
};

export default CommentList;
