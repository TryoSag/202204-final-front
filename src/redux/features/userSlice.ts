import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserData } from "../../types/userTypes";

const userInitialState: User = {
  username: "",
  adminUser: false,
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login: (user, action: PayloadAction<UserData>): User => ({
      ...action.payload,
      logged: true,
    }),
    logout: (): User => userInitialState,
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;