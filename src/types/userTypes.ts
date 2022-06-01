export interface User {
  username: string;
  adminUser: boolean;
  logged: boolean;
}

export interface UserData {
  username: string;
  adminUser: boolean;
}

export interface UserToRegister {
  name: string;
  username: string;
  password: string;
}

export interface UserToLogin {
  username: string;
  password: string;
}
