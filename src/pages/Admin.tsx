import React, { useEffect, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { IUser } from '../interfaces/User';

export const AdminPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    Axios.get('/api/users', { withCredentials: true })
      .then((res: AxiosResponse) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id: string) => {
    Axios.post('/api/users/delete', { id }, { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.statusText === 'OK') {
          console.log('User was deleted with ID:', res.data.id);
          setUsers(users.filter((user: IUser) => res.data.id !== user.id));
        } else {
          console.log('status not ok', res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='users'>
      <h1>Users:</h1>
      {users &&
        users.map((user: IUser) => (
          <div className='message-details' key={user.id}>
            <h4>{user.username}</h4>
            <p>Id: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>
              <strong>Admin:</strong> {user.isAdmin ? 'true' : 'false'}
            </p>
            {/*<p>{formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}</p>*/}
            <span className='material-symbols-outlined' onClick={() => handleDelete(user.id)}>
              delete
            </span>
          </div>
        ))}
    </div>
  );
};
