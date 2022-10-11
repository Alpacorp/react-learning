import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log({ email, password });

    try {
      const response = await calendarApi.post("/auth", { email, password });
      console.log({ response });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // Properties

    errorMessage,
    status,
    user,

    // Methods

    startLogin,
  };
};
