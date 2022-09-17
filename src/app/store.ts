import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postReducer from '../feature/post/postSlice';
import commentReducer from '../feature/comment/commentSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
