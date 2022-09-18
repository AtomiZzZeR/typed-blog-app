import { useState, FormEvent, FC, ChangeEvent } from 'react';
import { IPost } from '../types/types';
import Styled from './EditPost.styles';

interface IPostData {
  title: string;
  body: string;
}

interface IEditPostProps {
  post: IPost;
  sendPostData: (postData: IPostData) => void;
  closeFormEditPost: () => void;
}

const EditPost: FC<IEditPostProps> = ({
  post,
  sendPostData,
  closeFormEditPost,
}) => {
  const [postData, setPostData] = useState<IPostData>({
    title: post.title,
    body: post.body,
  });

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPostData({ ...postData, title: e.target.value });
  };

  const handleBodyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPostData({ ...postData, body: e.target.value });
  };

  const handleEditClick = (e: FormEvent): void => {
    e.preventDefault();

    sendPostData({ title: postData.title, body: postData.body });

    closeFormEditPost();
  };

  const handleCancelEditClick = (e: FormEvent) => {
    e.preventDefault();

    closeFormEditPost();
  };

  return (
    <Styled.Form>
      <Styled.Input
        type={'text'}
        value={postData.title}
        onChange={handleTitleChange}
      />
      <Styled.Input
        type={'text'}
        value={postData.body}
        onChange={handleBodyChange}
      />

      <Styled.Button onClick={handleEditClick}>Edit</Styled.Button>
      <Styled.Button onClick={handleCancelEditClick}>Cancel</Styled.Button>
    </Styled.Form>
  );
};

export default EditPost;
