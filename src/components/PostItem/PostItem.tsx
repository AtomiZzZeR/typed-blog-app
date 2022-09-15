import React, { FC, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostActionList, selectPost } from '../../feature/post/postSlice';
import { FormEditPost } from '../FormEditPost';
import { IPost } from '../types/typex';
import Styled from './PostItem.styles';

interface IPostItemProps {
  post: IPost;
  number: number;
}

const PostItem: FC<IPostItemProps> = ({ post, number }) => {
  const dispatch = useDispatch();

  const postSelector = useSelector(selectPost);

  const { idEditablePost } = postSelector;

  const [isFormEdit, setIsFormEdit] = useState<boolean>(false);

  const handleOpenFormEditPostClick = () => {
    dispatch(PostActionList.setCurrentPostId(post.id));

    setIsFormEdit(true);
  };

  const handleEditPostData = (postData: any) => {
    dispatch(PostActionList.editPost([post, postData]));
  };

  const handleRemovePostClick = () => {
    dispatch(PostActionList.removePost(post.id));
  };

  const closeFormEditPost = () => {
    setIsFormEdit(false);
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>
        {number}. {post.title}
      </Styled.Title>

      <Styled.Content>{post.body}</Styled.Content>

      {isFormEdit && idEditablePost === post.id ? (
        <FormEditPost
          post={post}
          sendPostData={handleEditPostData}
          closeFormEditPost={closeFormEditPost}
        />
      ) : null}

      {isFormEdit && idEditablePost === post.id ? null : (
        <Styled.ButtonEdit onClick={handleOpenFormEditPostClick} />
      )}

      <Styled.ButtonDelete onClick={handleRemovePostClick} />
    </Styled.Wrapper>
  );
};

export default PostItem;
