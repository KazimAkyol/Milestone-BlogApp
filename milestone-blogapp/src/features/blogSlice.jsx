import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    blog: [],
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
    blogSuccess: (state, { payload: { data, url } }) => {
      state[url] = data.data;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { fetchStart, fetchFail, blogSuccess } = blogSlice.actions;

export default blogSlice.reducer;
