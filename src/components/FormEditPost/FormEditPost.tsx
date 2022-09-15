import React, { useState, FormEvent, FC, ChangeEvent } from 'react';
import { IPost } from '../types/typex';
import Styled from './FormEditPost.styles';

interface IPostData {
  title: string;
  body: string;
}

interface IFormIdetPostProps {
  post: IPost;
  sendPostData: (postData: IPostData) => void;
  closeFormEditPost: () => void;
}

const FormEditPost: FC<IFormIdetPostProps> = ({
  post,
  sendPostData,
  closeFormEditPost,
}) => {
  const [postData, setPostData] = useState<IPostData>({
    title: post.title,
    body: post.body,
  });

  const handlePostTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPostData({ ...postData, title: e.target.value });
  };

  const handlePostBodyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPostData({ ...postData, body: e.target.value });
  };

  const handleEditPostClick = (e: FormEvent): void => {
    e.preventDefault();

    sendPostData({ title: postData.title, body: postData.body });

    closeFormEditPost();
  };

  const handleCancelEditPostClick = (e: FormEvent) => {
    e.preventDefault();

    closeFormEditPost();
  };

  return (
    <Styled.Form>
      <input
        type={'text'}
        value={postData.title}
        onChange={handlePostTitleChange}
      />
      <input
        type={'text'}
        value={postData.body}
        onChange={handlePostBodyChange}
      />
      <button onClick={handleEditPostClick}>Edit</button>
      <button onClick={handleCancelEditPostClick}>Cancel</button>
    </Styled.Form>
  );
};

export default FormEditPost;
