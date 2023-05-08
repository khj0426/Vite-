import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import type user from '../types/User';

const { persistAtom } = recoilPersist({
  key: 'userState',
  storage: sessionStorage,
});

const userAtom = atom<user>({
  key: 'userState',
  default: {
    displayName: '',
    photoURL: '',
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});

const userState = selector<user>({
  key: 'userLoginSelector',
  get: ({ get }) => {
    const user = get(userAtom);
    return user;
  },

  set: ({ set }, newUser) => {
    set(userAtom, newUser);
  },
});

export default userState;
