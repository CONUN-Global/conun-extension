import { useQuery } from "react-query";

import useStore from "../store/store";

import instance from "../axios/instance";

import getAuthHeader from "../helpers/getAuthHeader";

function useCurrentUser() {
  const setIsUserLoggedIn = useStore((state) => state.setIsAuthenticated);
  const { data, isLoading, isError } = useQuery(
    "current-user",
    async () => {
      const { data } = await instance.get("/users/me");
      return data;
    },
    {
      enabled: !!getAuthHeader(),
      onSuccess: () => {
        setIsUserLoggedIn(true);
      },
    }
  );

  return {
    currentUser: data?.payload,
    isLoading,
    isError,
  };
}

export default useCurrentUser;
