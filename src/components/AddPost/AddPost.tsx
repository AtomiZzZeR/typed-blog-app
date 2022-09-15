import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Styled from './AddPost.styles';
import { v4 as uuid } from 'uuid';
import { IPost } from '../types/typex';
import { useDispatch } from 'react-redux';
import { PostActionList } from '../../feature/post/postSlice';

interface IAddPost {
  title: string;
  body: string;
}

const AddPost: FC = () => {
  const dispatch = useDispatch();

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
      id: uuid(),
      title: post.title,
      body: post.body,
    };

    dispatch(PostActionList.addPost(newPost));

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
