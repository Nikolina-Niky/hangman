import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import gameReducer from "./reducers/gameReducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
