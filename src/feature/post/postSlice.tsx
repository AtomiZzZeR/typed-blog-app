import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../components/types/types';
import type { RootState } from '../../app/store';

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
      const { userId, id, title, description, creationDate } = payload;

      state.postList = [
        ...state.postList,
        {
          userId,
          id,
          title,
          description,
          creationDate,
          likeList: [],
          commentList: [],
        },
      ];

      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    editPost: (state, { payload }) => {
      const [currentPost, newPostData] = payload;

      const postEdit = {
        ...currentPost,
        title: newPostData.title,
        description: newPostData.description,
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
    addLike: (state, { payload }) => {
      const { userId, postId } = payload;

      const postFounded = state.postList.find((post) => post.id === postId);

      const likeFounded = postFounded!.likeList!.find(
        (like) => like === userId
      );

      if (likeFounded) {
        const postChanged = {
          ...postFounded,
          likeList: postFounded?.likeList!.filter((like) => like !== userId),
        };

        state.postList = [
          ...state.postList.filter((post) => post.id !== postId),
          postChanged as IPost,
        ];
        localStorage.setItem('postList', JSON.stringify(state.postList));

        return;
      }

      const postChanged = {
        ...postFounded,
        likeList: [...postFounded?.likeList!, userId],
      };

      state.postList = [
        ...state.postList.filter((post) => post.id !== postId),
        postChanged as IPost,
      ];
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

      const newPost: IPost = {
        ...(postFounded as IPost),
        commentList: [...postFounded!.commentList!, newComment],
      };

      state.postList = [
        ...state.postList.filter((post) => post.id !== postId),
        newPost,
      ];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    editComment: (state, { payload }) => {
      const { postId, commentId, value } = payload;

      const postFounded = state.postList.find((post) => post.id === postId);

      const postChanged = {
        ...postFounded,
        commentList: postFounded!.commentList!.find(
          (comment) => comment.id === commentId
        ),
      };

      const newPost = {
        ...postChanged,
        commentList: [
          ...postFounded!.commentList!.filter(
            (comment) => comment.id !== commentId
          ),
          { ...postChanged.commentList, description: value },
        ],
      };

      state.postList = [
        ...(state.postList.filter((post) => post.id !== postId) as any),
        newPost,
      ];
      localStorage.setItem('postList', JSON.stringify(state.postList));

      console.log(JSON.stringify(postChanged));
    },
    deleteComment: (state, { payload }) => {
      const { postId, commentId } = payload;

      const postFounded = state.postList.find((post) => post.id === postId);

      const postChanged = {
        ...postFounded,
        commentList: postFounded!.commentList!.filter(
          (comment) => comment.id !== commentId
        ),
      };

      state.postList = [
        ...(state.postList.filter((post) => post.id !== postId) as any),
        postChanged,
      ];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
  },
});

export const selectPost = (state: RootState) => state.post;

export const postActionList = postSlice.actions;

export default postSlice.reducer;
