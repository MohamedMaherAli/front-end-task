export type User = {
  name: string;
  email: string;
  password: string;
};

export type Store = {
  users: User[];
  currentUser: User | null;
};
