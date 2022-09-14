import React, { useState, ChangeEvent, MouseEventHandler } from 'react';
import { IUser } from './components/types/types';
import { UserList } from './components/UserList';
import { v4 as uuid } from 'uuid';
import { AddUser } from './components/AddUser';

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

  const addUser = (newUser: IUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <>
      <UserList users={users} />
      <AddUser addUser={addUser} />
    </>
  );
};

export default App;
