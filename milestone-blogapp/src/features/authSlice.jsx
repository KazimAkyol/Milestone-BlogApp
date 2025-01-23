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
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.currentUser = payload?.user?.username;
      state.token = payload?.token;
      state.loading = false;
      state.isAdmin = payload?.user?.isAdmin;
    },
    registerSuccess: (state, { payload }) => {
      console.log("Register Payload:", payload);
      state.currentUser = JSON.parse(payload?.data?.username ?? "null");
      state.token = JSON.parse(payload?.token ?? "null");
      state.loading = false;
      state.isAdmin = payload?.data?.isAdmin ?? false;
    },
  },
});

export const { fetchStart, fetchFail, loginSuccess, registerSuccess } =
  authSlice.actions;

export default authSlice.reducer;
