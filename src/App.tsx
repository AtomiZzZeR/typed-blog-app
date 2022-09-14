import React, { useState, ChangeEvent, MouseEventHandler } from 'react';
import { IUser } from './components/types/types';
import { UserList } from './components/UserList';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: uuid(),
      name: 'Vadya',
      email: 'vad@mail.ru',
    },
    {
      id: uuid(),
      name: 'Dmitriy',
      email: 'dmiy@mail.ru',
    },
  ]);

  const [user, setUser] = useState({ name: '', email: '' });

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

    setUsers([...users, newUser]);
  };

  return (
    <>
      <UserList users={users} />
      <form>
        <input
          type={'text'}
          value={user.name}
          onChange={handleUserNameChange}
        />
        <input
          type={'text'}
          value={user.email}
          onChange={handleUserEmailChange}
        />
        <button onClick={handleAddUserClick}>Добавить</button>
      </form>
    </>
  );
};

export default App;
