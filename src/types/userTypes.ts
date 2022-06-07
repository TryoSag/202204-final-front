export interface User {
  username: string;
  adminUser: boolean;
  eMail: string;
}
export interface UserToRegister {
  name: string;
  username: string;
  password: string;
  eMail: string;
}

export interface UserToLogin {
  username: string;
  password: string;
}
