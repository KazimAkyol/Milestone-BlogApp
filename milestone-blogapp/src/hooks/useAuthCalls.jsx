import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import axios from "axios";
import useAxios from "./useAxios";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosWithoutHeader } = useAxios();

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "https://30102.fullstack.clarusway.com/users",
        userInfo
      );
      console.log("register icinde", data);
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "https://30102.fullstack.clarusway.com/auth/login",
        userInfo
      );
      console.log("login icinde", data);
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register, login };
};

export default useAuthCalls;
