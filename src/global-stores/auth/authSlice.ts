import { createSlice } from "@reduxjs/toolkit";

type User = {
  username: string;
  name: string;
};

interface AuthState {
  hasToken: boolean;
  user: User;
}

const initialState: AuthState = {
  hasToken: false,
  user: { username: "", name: "" },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateHasToken(state, action) {
      const { value } = action.payload;
      state.hasToken = value;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { updateHasToken, updateUser } = authSlice.actions;

export default authSlice.reducer;
