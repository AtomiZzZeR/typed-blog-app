import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../components/types/typex';

interface IInitialState {
  posts: IPost[];
}

const initialState: IInitialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPosts: (state) => {
      state.posts = JSON.parse(localStorage.getItem('posts')!) || [];
    },
    addPost: (state, { payload }) => {
      const { id, title, body } = payload;

      state.posts = [
        ...state.posts,
        {
          id,
          title,
          body,
        },
      ];

      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
  },
});

export const selectPost = (state: any) => state.post;

export const PostActionList = postSlice.actions;

export default postSlice.reducer;
