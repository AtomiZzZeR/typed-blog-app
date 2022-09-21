import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActionList, selectPost } from '../../feature/post/postSlice';
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
import { selectAuth } from '../../feature/auth/authSlice';

interface IPostItemProps {
  post: IPost;
  number: number;
}

const PostItem: FC<IPostItemProps> = ({ post, number }) => {
  const dispatch = useDispatch();

  const authSelector = useSelector(selectAuth);
  const { currentUserId } = authSelector;

  const postSelector = useSelector(selectPost);
  const { currentPostId } = postSelector;

  const commentSelector = useSelector(selectComment);
  const { isFormAddComment } = commentSelector;

  const [isFormEdit, setIsFormEdit] = useState<boolean>(false);

  const [styleLike, setStyleLike] = useState({
    color: '#ff7514',
    bgColor: '#222',
  });

  const handleOpenFormEditPostClick = () => {
    dispatch(postActionList.setCurrentPostId(post.id));

    setIsFormEdit(true);
  };

  const handleEditPostData = (postData: any) => {
    dispatch(postActionList.editPost([post, postData]));
  };

  const handleRemovePostClick = () => {
    dispatch(postActionList.setCurrentPostId(post.id));

    dispatch(postActionList.displayWindow());
  };

  const closeFormEditPost = () => {
    setIsFormEdit(false);
  };

  const handleLikeClick = () => {
    dispatch(
      postActionList.addLike({ userId: currentUserId, postId: post.id })
    );

    // if (post!.likeList!.length) {
    //   setStyleLike({
    //     color: '#222',
    //     background: '#ff7514',
    //   });

    //   return;
    // }

    // setStyleLike({
    //   color: '#ff7514',
    //   background: '#222',
    // });
  };

  const handleOpenFormAddCommentClick = () => {
    dispatch(postActionList.setCurrentPostId(post.id));

    dispatch(commentActionList.openAddComment());
  };

  return (
    <Styled.Wrapper>
      <Styled.PostContent>
        <Styled.UserId>user id: {post.userId}</Styled.UserId>
        <Styled.Title>
          {number}. {post.title}
        </Styled.Title>

        <Styled.Description>{post.description}</Styled.Description>

        {isFormEdit && currentPostId === post.id ? (
          <EditPost
            post={post}
            sendPostData={handleEditPostData}
            closeFormEditPost={closeFormEditPost}
          />
        ) : null}

        {currentUserId === post.userId ? (
          <Styled.ButtonEdit onClick={handleOpenFormEditPostClick}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Styled.ButtonEdit>
        ) : null}

        {currentUserId === post.userId ? (
          <Styled.ButtonDelete onClick={handleRemovePostClick}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </Styled.ButtonDelete>
        ) : null}

        <Styled.BoxSystemLike>
          <Styled.ButtonLike
            onClick={handleLikeClick}
            color={styleLike.color}
            bgColor={styleLike.bgColor}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Styled.ButtonLike>

          <Styled.CountLike>{post.likeList!.length}</Styled.CountLike>
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
