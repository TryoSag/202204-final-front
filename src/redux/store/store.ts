import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "../features/petsSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pets: petsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
