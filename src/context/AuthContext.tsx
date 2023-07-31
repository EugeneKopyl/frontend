import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { IUser } from '../interfaces/User';

export const myAuthContext = createContext<Partial<IUser>>({});
export default function AuthContext(props: PropsWithChildren) {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    Axios.get('https://backend-production-1f67.up.railway.app/api/users/user', { withCredentials: true }).then(
      (res: AxiosResponse) => {
        setUser(res.data);
      },
    );
  }, []);
// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  return <myAuthContext.Provider value={user!}>{props.children}</myAuthContext.Provider>;
}
