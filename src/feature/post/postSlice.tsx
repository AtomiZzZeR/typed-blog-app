import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../components/types/typex';

interface IInitialState {
  posts: IPost[];
  idEditablePost: string;
}

const initialState: IInitialState = {
  posts: [],
  idEditablePost: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPosts: (state) => {
      state.posts = JSON.parse(localStorage.getItem('posts')!) || [];
    },
    addPost: (state, { payload }) => {
      const { id, title, body, creationDate } = payload;

      state.posts = [
        ...state.posts,
        {
          id,
          title,
          body,
          creationDate,
        },
      ];

      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    editPost: (state, { payload }) => {
      const [currentPost, newPostData] = payload;

      const postEdit = {
        title: newPostData.title,
        body: newPostData.body,
        id: currentPost.id,
        creationDate: currentPost.creationDate,
      };

      state.posts = [
        ...state.posts.filter((post) => post.id !== currentPost.id),
        postEdit,
      ];
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    setCurrentPostId: (state, { payload: currentPostId }) => {
      state.idEditablePost = currentPostId;
    },
    removePost: (state, { payload: postId }) => {
      state.posts = state.posts.filter((post) => post.id !== postId);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
  },
});

export const selectPost = (state: any) => state.post;

export const PostActionList = postSlice.actions;

export default postSlice.reducer;
