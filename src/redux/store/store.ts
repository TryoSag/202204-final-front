import { configureStore } from "@reduxjs/toolkit";
import userReucer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
