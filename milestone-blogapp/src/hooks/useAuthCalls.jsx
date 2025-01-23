import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import axios from "axios";
import useAxios from "./useAxios";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosWithoutHeader } = useAxios();

  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithoutHeader(`auth/login`, userInfo);
      console.log("login icinde", data);
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithoutHeader(`users`, userInfo);
      console.log("register icinde", data);
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { login, register };
};

export default useAuthCalls;
