import React, { FC } from 'react';
import { IUser } from '../types/types';

interface IUserItemProps {
  user: IUser;
  num: number;
}

const UserItem: FC<IUserItemProps> = ({ user, num }) => {
  return (
    <div style={{ padding: 10, border: '1px solid #444', marginBottom: 10 }}>
      {num}. <b>{user.name}</b> почта: {user.email}
    </div>
  );
};

export default UserItem;
