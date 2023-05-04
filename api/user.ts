import { User, Store } from '@/types/types';

const storageKey = 'taskStore';

export const getStore = (): Store => {
  if (typeof window === 'undefined') {
    return { users: [], currentUser: null };
  } else {
    const store = localStorage.getItem(storageKey);
    return store ? JSON.parse(store) : { users: [] };
  }
};

export const setStore = (store: Store) => {
  localStorage.setItem(storageKey, JSON.stringify(store));
};

export const signUpUser = (user: User): boolean => {
  const store = getStore();
  const exsitingUser = store.users.find((u) => u.email === user.email);
  if (exsitingUser !== undefined) {
    return false;
  } else {
    store.users.push(user);
    store.currentUser = user;
    setStore(store);
    return true;
  }
};

export const signInUser = (email: string, password: string): boolean => {
  const store = getStore();
  const user = store.users.find((user) => user.email === email);
  if (user === undefined) return false;
  if (user.password !== password) return false;
  store.currentUser = user;
  setStore(store);
  return true;
};

export const signOutUser = (): void => {
  const store = getStore();
  store.currentUser = null;
  setStore(store);
};

export const listAllUsers = (): User[] => {
  const store = getStore();
  return store.users;
};
