import React, { FC, useState, ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';
import { IUser } from '../types/types';
import Styled from './AddUser.styles';

interface IAddUserProps {
  addUser: (newUser: IUser) => void;
}

interface IAddUser {
  name: string;
  email: string;
}

const AddUser: FC<IAddUserProps> = ({ addUser }) => {
  const [user, setUser] = useState<IAddUser>({ name: '', email: '' });

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleUserEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: e.target.value });
  };

  // изменить тип event для preventDefault
  const handleAddUserClick = (e: any) => {
    e.preventDefault();

    const newUser = {
      id: uuid(),
      name: user.name,
      email: user.email,
    };

    addUser(newUser);

    setUser({ name: '', email: '' });
  };

  return (
    <Styled.Form>
      <input type={'text'} value={user.name} onChange={handleUserNameChange} />
      <input
        type={'text'}
        value={user.email}
        onChange={handleUserEmailChange}
      />
      <button onClick={handleAddUserClick}>Добавить</button>
    </Styled.Form>
  );
};

export default AddUser;
