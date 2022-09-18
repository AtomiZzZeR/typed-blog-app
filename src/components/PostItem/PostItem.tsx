import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostActionList, selectPost } from '../../feature/post/postSlice';
import { EditPost } from '../EditPost';
import { IPost } from '../types/types';
import Styled from './PostItem.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faCircleXmark,
  faHeart,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { AddComment } from '../AddComment';
import {
  commentActionList,
  selectComment,
} from '../../feature/comment/commentSlice';
import { CommentList } from '../CommentList';

interface IPostItemProps {
  post: IPost;
  number: number;
}

const PostItem: FC<IPostItemProps> = ({ post, number }) => {
  const dispatch = useDispatch();

  const postSelector = useSelector(selectPost);

  const { currentPostId } = postSelector;

  const commentSelector = useSelector(selectComment);

  const { isFormAddComment } = commentSelector;

  const [isFormEdit, setIsFormEdit] = useState<boolean>(false);

  const [styleLike, setStyleLike] = useState({
    color: '#ff7514',
    background: '#222',
  });

  const [like, setLike] = useState(0);

  const handleOpenFormEditPostClick = () => {
    dispatch(PostActionList.setCurrentPostId(post.id));

    setIsFormEdit(true);
  };

  const handleEditPostData = (postData: any) => {
    dispatch(PostActionList.editPost([post, postData]));
  };

  const handleRemovePostClick = () => {
    dispatch(PostActionList.setCurrentPostId(post.id));

    dispatch(PostActionList.displayWindow());
  };

  const closeFormEditPost = () => {
    setIsFormEdit(false);
  };

  const handleLikeClick = () => {
    if (like === 1) {
      setLike(0);

      setStyleLike({
        color: '#ff7514',
        background: '#222',
      });

      return;
    }

    setLike(like + 1);

    setStyleLike({
      color: '#222',
      background: '#ff7514',
    });
  };

  const handleOpenFormAddCommentClick = () => {
    dispatch(PostActionList.setCurrentPostId(post.id));

    dispatch(commentActionList.openFormAddComment());
  };

  return (
    <Styled.Wrapper>
      <Styled.PostContent>
        <Styled.Title>
          {number}. {post.title}
        </Styled.Title>

        <Styled.Description>{post.body}</Styled.Description>

        {isFormEdit && currentPostId === post.id ? (
          <EditPost
            post={post}
            sendPostData={handleEditPostData}
            closeFormEditPost={closeFormEditPost}
          />
        ) : null}

        {isFormEdit && currentPostId === post.id ? null : (
          <Styled.ButtonEdit onClick={handleOpenFormEditPostClick}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Styled.ButtonEdit>
        )}

        <Styled.ButtonDelete onClick={handleRemovePostClick}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </Styled.ButtonDelete>

        <Styled.BoxSystemLike>
          <Styled.ButtonLike
            onClick={handleLikeClick}
            color={styleLike.color}
            background={styleLike.background}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Styled.ButtonLike>

          <Styled.CountLike>{like}</Styled.CountLike>
        </Styled.BoxSystemLike>

        <Styled.ButtonAddComment onClick={handleOpenFormAddCommentClick}>
          <FontAwesomeIcon icon={faCommentDots} />
        </Styled.ButtonAddComment>
      </Styled.PostContent>

      <Styled.PostComments>
        <Styled.MessageComments>Comments:</Styled.MessageComments>

        {post.commentList!.length ? (
          <CommentList commentList={post.commentList!} postId={post.id} />
        ) : null}

        {isFormAddComment && currentPostId === post.id ? (
          <AddComment postId={currentPostId} />
        ) : null}
      </Styled.PostComments>
    </Styled.Wrapper>
  );
};

export default PostItem;
