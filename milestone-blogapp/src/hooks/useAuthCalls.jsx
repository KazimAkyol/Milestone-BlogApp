import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import axios from "axios";

const useAuthCalls = () => {
  const dispatch = useDispatch();

  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "https://30102.fullstack.clarusway.com/auth/login",
        userInfo
      );
      console.log("login icinde", data);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { login };
};

export default useAuthCalls;
