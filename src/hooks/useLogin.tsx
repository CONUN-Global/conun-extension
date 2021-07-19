import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import instance from "../axios/instance";
import useStore from "../store/store";

function useLogin() {
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const history = useHistory();
  const { mutateAsync: login, isLoading } = useMutation(
    async (loginData: any) => {
      const { data } = await instance.post("/auth", loginData);
      return data;
    },
    {
      onSuccess: () => {
        setIsAuthenticated(true);
        history.replace("/");
      },
    }
  );
  return { login, loading: isLoading };
}

export default useLogin;
