import React, { FC, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostActionList, selectPost } from '../../feature/post/postSlice';
import { FormConfirmationDelete } from '../FormConfirmationDelete';
import { FormEditPost } from '../FormEditPost';
import { IPost } from '../types/typex';
import Styled from './PostItem.styles';

interface IPostItemProps {
  post: IPost;
  number: number;
}

interface IStyleLike {
  colorLike: string;
  background: string;
}

const PostItem: FC<IPostItemProps> = ({ post, number }) => {
  const dispatch = useDispatch();

  const postSelector = useSelector(selectPost);

  const { idEditablePost } = postSelector;

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
        <Styled.ButtonEdit
          onClick={handleOpenFormEditPostClick}
          className={'fa-solid fa-pen-to-square'}
        />
      )}

      <Styled.ButtonDelete
        onClick={handleRemovePostClick}
        className={'fa-solid fa-circle-xmark'}
      />

      <Styled.BoxForSystemLike>
        <Styled.ButtonLike
          className={'fa-solid fa-heart'}
          onClick={handleLikeClick}
          color={styleLike.color}
          background={styleLike.background}
        />
        <Styled.CountLike>{like}</Styled.CountLike>
      </Styled.BoxForSystemLike>
    </Styled.Wrapper>
  );
};

export default PostItem;
