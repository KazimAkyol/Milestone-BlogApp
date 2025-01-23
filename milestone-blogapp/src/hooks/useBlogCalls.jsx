import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/blogSlice";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { axiosWithToken } = useAxios();

  const getBlogData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.get(`$(url)`);
      dispatch(blogSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getBlogData };
};

export default useBlogCalls;
