import React from 'react';
import { v4 as uuid } from 'uuid';
import { PostList } from './components/PostList';

const App = () => {
  const posts = [
    { userId: 1, id: 1, title: 'post 1', body: 'description...' },
    { userId: 2, id: 2, title: 'post 2', body: 'description...' },
  ];

  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export default App;
