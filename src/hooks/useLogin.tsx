import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import useStore from "../store/store";

import handleLogin from "../helpers/handleLogin";

import instance from "../axios/instance";

function useLogin() {
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const history = useHistory();
  const { mutateAsync: login, isLoading } = useMutation(
    async (loginData: { password: string; email: string }) => {
      const { data } = await instance.post("/auth", loginData);
      return data;
    },
    {
      onSuccess: (data) => {
        setIsAuthenticated(true);
        handleLogin(data?.payload?.["x-auth-token"]);
        history.replace("/");
      },
    }
  );
  return { login, loading: isLoading };
}

export default useLogin;
