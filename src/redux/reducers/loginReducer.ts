import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface LoginState {
  name: string;
}
const initialState: LoginState = {
  name: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { loginUser } = loginSlice.actions;
export const loggedUser = (state: RootState) => state.login.name;

export default loginSlice.reducer;
