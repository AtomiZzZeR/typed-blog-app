import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../components/types/typex';

interface IInitialState {
  postList: IPost[];
  currentPostId: string;
  isWindow: boolean;
  isButtonConfirmDeletePost: boolean;
}

const initialState: IInitialState = {
  postList: [],
  currentPostId: '',
  isWindow: false,
  isButtonConfirmDeletePost: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPostList: (state) => {
      state.postList =
        JSON.parse(localStorage.getItem('postList') as string) || [];
    },
    addPost: (state, { payload }) => {
      const { id, title, body, creationDate } = payload;

      state.postList = [
        ...state.postList,
        {
          id,
          title,
          body,
          creationDate,
          commentList: [{ id: '000', body: '000', creationDate: Date.now() }],
        },
      ];

      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    editPost: (state, { payload }) => {
      const [currentPost, newPostData] = payload;

      const postEdit = {
        title: newPostData.title,
        body: newPostData.body,
        id: currentPost.id,
        creationDate: currentPost.creationDate,
      };

      state.postList = [
        ...state.postList.filter((post) => post.id !== currentPost.id),
        postEdit,
      ];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    setCurrentPostId: (state, { payload: postId }) => {
      state.currentPostId = postId;
    },
    deletePost: (state, { payload: postId }) => {
      state.postList = state.postList.filter((post) => post.id !== postId);
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    displayWindow: (state) => {
      state.isWindow = true;
    },
    closeWindow: (state) => {
      state.isWindow = false;
    },
    activeConfirmDeletePost: (state) => {
      state.isButtonConfirmDeletePost = true;
    },
    addComment: (state, { payload }) => {
      const { postId, newComment } = payload;

      const postFounded = state.postList.find((post) => post.id === postId);

      console.log(JSON.stringify(postFounded));

      const newPost: IPost = {
        ...(postFounded as IPost),
        commentList: [...postFounded!.commentList!, newComment],
      };

      console.log(JSON.stringify(newPost));

      state.postList = [
        ...state.postList.filter((post) => post.id !== postId),
        newPost,
      ];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
  },
});

export const selectPost = (state: any) => state.post;

export const PostActionList = postSlice.actions;

export default postSlice.reducer;
