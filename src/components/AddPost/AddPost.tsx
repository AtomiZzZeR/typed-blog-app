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

  const [borderInputs, setBorderInputs] = useState<string[]>([
    '2px solid transparent',
    '2px solid transparent',
  ]);

  const [isMessage, setIsMessage] = useState<boolean>(false);

  const [msgError, setMsgError] = useState<string>('');

  const [post, setPost] = useState<IAddPost>(
    JSON.parse(sessionStorage.getItem('postData')!) || { title: '', body: '' }
  );

  const handlePostTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value });

    sessionStorage.setItem(
      'postData',
      JSON.stringify({ ...post, title: post.title })
    );
  };

  const handlePostBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, body: e.target.value });
    sessionStorage.setItem(
      'postData',
      JSON.stringify({ ...post, body: post.body })
    );
  };

  const handleAddPostClick = (e: FormEvent) => {
    e.preventDefault();

    if (post.title === '' && post.body === '') {
      setMsgError('Error! Empty title and post content.');

      setBorderInputs(['2px solid #ff3333', '2px solid #ff3333']);

      return;
    }

    if (post.title === '') {
      setMsgError('Error! Empty post title.');

      setBorderInputs(['2px solid #ff3333', '2px solid transparent']);

      return;
    }

    if (post.body === '') {
      setMsgError('Error! Empty post content.');

      setBorderInputs(['2px solid transparent', '2px solid #ff3333']);

      return;
    }

    const newPost = {
      id: uuid(),
      title: post.title,
      body: post.body,
    };

    dispatch(PostActionList.addPost(newPost));

    setIsMessage(true);

    setPost({ title: '', body: '' });
    sessionStorage.setItem('postData', JSON.stringify({ title: '', body: '' }));

    setMsgError('');
    setBorderInputs(['2px solid transparent', '2px solid transparent']);
  };

  return (
    <Styled.Form>
      <Styled.Input
        type={'text'}
        placeholder={'post title'}
        value={post.title}
        onChange={handlePostTitleChange}
        onFocus={() => setIsMessage(false)}
        border={borderInputs[0]}
      />

      <Styled.Input
        type={'text'}
        placeholder={'description title'}
        value={post.body}
        onChange={handlePostBodyChange}
        onFocus={() => setIsMessage(false)}
        border={borderInputs[1]}
      />

      {isMessage ? (
        <Styled.MessagePostAdded>
          Post successfully added.
        </Styled.MessagePostAdded>
      ) : (
        <Styled.MessageError>{msgError}</Styled.MessageError>
      )}

      <Styled.Button onClick={handleAddPostClick}>Add Post</Styled.Button>
    </Styled.Form>
  );
};

export default AddPost;
