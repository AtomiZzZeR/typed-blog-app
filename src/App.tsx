// import axios from 'axios';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { PostList } from './components/PostList';
import { IPost } from './components/types/typex';
import { v4 as uuid } from 'uuid';
import { AddPost } from './components/AddPost';

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([
    { userId: 1, id: uuid(), title: 'post 1', body: 'description...' },
    { userId: 2, id: uuid(), title: 'post 2', body: 'description...' },
    { userId: 3, id: uuid(), title: 'post 3', body: 'description...' },
  ]);

  // Получение постов с сервера:
  //-----------------------------------------------------------
  // const [posts, setPosts] = useState<IPost[]>([]);

  // useEffect(() => {
  //   getPostsFromServer();
  // }, []);

  // async function getPostsFromServer() {
  //   const response = await axios.get<IPost[]>(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   );
  //   setPosts(response.data);
  // }
  //------------------------------------------------------------

  const addPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <PostList posts={posts} />
      <AddPost addPost={addPost} />
    </>
  );
};

export default App;
