import React, { FC } from 'react';
import { IUser } from '../types/types';
import { UserItem } from '../UserItem';

interface IUserListProps {
  users: IUser[];
}

const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <UserItem user={user} key={user.id} num={index + 1} />
      ))}
    </>
  );
};

export default UserList;
