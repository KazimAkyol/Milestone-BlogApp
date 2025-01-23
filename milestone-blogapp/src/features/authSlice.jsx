import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    error: false,
    currentUser: null,
    token: null,
    isAdmin: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      console.log(action);
    },
    loginSuccess: (state, { payload }) => {
      state.currentUser = payload?.user?.username;
      state.token = payload?.token;
      state.loading = false;
      state.isAdmin = payload?.user?.isAdmin;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, registerSuccess, loginSuccess, fetchFail } =
  authSlice.actions;

export default authSlice.reducer;
