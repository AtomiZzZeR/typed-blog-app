import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Styled from './AddPost.styles';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { PostActionList } from '../../feature/post/postSlice';

interface IAddPostState {
  title: string;
  body: string;
}

enum EBorderInputs {
  default = '2px solid transparent',
  error = '2px solid #ff3333',
}

const AddPost: FC = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState<IAddPostState>(
    JSON.parse(sessionStorage.getItem('postData') as string) || {
      title: '',
      body: '',
    }
  );

  const [borderInputs, setBorderInputs] = useState<[string, string]>([
    EBorderInputs.default,
    EBorderInputs.default,
  ]);

  const [messageValidate, setMessageValidate] = useState<string>('');

  const [colorMessageValidate, setColorMessageValidate] =
    useState<string>('#ff3333');

  const handlePostTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPost({ ...post, title: e.target.value });

    sessionStorage.setItem(
      'postData',
      JSON.stringify({ ...post, title: e.target.value })
    );
  };

  const handlePostBodyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPost({ ...post, body: e.target.value });
    sessionStorage.setItem(
      'postData',
      JSON.stringify({ ...post, body: e.target.value })
    );
  };

  const handleAddPostClick = (e: FormEvent): void => {
    e.preventDefault();

    if (post.title === '' && post.body === '') {
      setMessageValidate('Error! Empty title and post content.');

      setBorderInputs([EBorderInputs.error, EBorderInputs.error]);

      return;
    }

    if (post.title === '') {
      setMessageValidate('Error! Empty post title.');

      setBorderInputs([EBorderInputs.error, EBorderInputs.default]);

      return;
    }

    if (post.body === '') {
      setMessageValidate('Error! Empty post content.');

      setBorderInputs([EBorderInputs.default, EBorderInputs.error]);

      return;
    }

    const newPost = {
      id: uuid(),
      title: post.title,
      body: post.body,
      creationDate: Date.now(),
    };

    dispatch(PostActionList.addPost(newPost));

    setColorMessageValidate('#47a76a');

    setMessageValidate('Post added successfully.');

    setBorderInputs([EBorderInputs.default, EBorderInputs.default]);

    setPost({ title: '', body: '' });
    sessionStorage.setItem('postData', JSON.stringify({ title: '', body: '' }));
  };

  const handleCloseMessage = (): void => {
    if (messageValidate === 'Post added successfully.') {
      setMessageValidate('');
      setColorMessageValidate('#ff3333');
    }
  };

  return (
    <Styled.Form>
      <Styled.Input
        type={'text'}
        placeholder={'post title'}
        value={post.title}
        border={borderInputs[0]}
        onChange={handlePostTitleChange}
        onFocus={handleCloseMessage}
      />

      <Styled.Input
        type={'text'}
        placeholder={'description title'}
        value={post.body}
        border={borderInputs[1]}
        onChange={handlePostBodyChange}
        onFocus={handleCloseMessage}
      />

      <Styled.MessageValidate colorMessage={colorMessageValidate}>
        {messageValidate}
      </Styled.MessageValidate>

      <Styled.Button onClick={handleAddPostClick}>Add Post</Styled.Button>
    </Styled.Form>
  );
};

export default AddPost;
