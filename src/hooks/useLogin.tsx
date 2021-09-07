import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import useStore from "../store/store";

import { setAuthHeader } from "../helpers/getAuthHeader";
import getIdentity from "../helpers/getIdentity";

import instance from "../axios/instance";

import { ORG_NAME } from "../const";

function useLogin() {
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const history = useHistory();
  const { mutateAsync: login, isLoading } = useMutation(
    async (password: string) => {
      const { data } = await instance.post("/users/importCertificate", {
        orgName: ORG_NAME,
        x509Identity: JSON.parse(getIdentity() || ""),
        password,
      });

      return data;
    },
    {
      onSuccess: (data) => {
        setIsAuthenticated(true);
        setAuthHeader(data?.payload?.jwtAuthToken);
        history.replace("/");
      },
    }
  );
  return { login, loading: isLoading };
}

export default useLogin;
