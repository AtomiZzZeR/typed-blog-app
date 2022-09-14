import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Styled from './AddPost.styles';
import { v4 as uuid } from 'uuid';
import { IPost } from '../types/typex';

interface IAddPostProps {
  addPost: (newPost: IPost) => void;
}

interface IAddPost {
  title: string;
  body: string;
}

const AddPost: FC<IAddPostProps> = ({ addPost }) => {
  const [post, setPost] = useState<IAddPost>({ title: '', body: '' });

  const handlePostTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value });
  };

  const handlePostBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, body: e.target.value });
  };

  const handleAddPostClick = (e: FormEvent) => {
    e.preventDefault();

    const newPost = {
      userId: 999,
      id: uuid(),
      title: post.title,
      body: post.body,
    };

    addPost(newPost);

    setPost({ title: '', body: '' });
  };

  return (
    <form action=''>
      <input
        type={'text'}
        value={post.title}
        onChange={handlePostTitleChange}
      />
      <input type={'text'} value={post.body} onChange={handlePostBodyChange} />
      <button onClick={handleAddPostClick}>Добавить</button>
    </form>
  );
};

export default AddPost;
