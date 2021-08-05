import { useQuery } from "react-query";

import instance from "../axios/instance";

import getAuthHeader from "../helpers/getAuthHeader";
import useStore from "../store/store";

async function getCurrentUser() {
  const { data } = await instance.get("/users/me");
  return data;
}

function useAppCurrentUser() {
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const { data, isLoading, refetch } = useQuery("currentUser", getCurrentUser, {
    enabled: !!getAuthHeader(),
    onSuccess: () => {
      setIsAuthenticated(true);
    },
  });

  return { currentUser: data?.payload ?? null, isLoading, refetch };
}

export default useAppCurrentUser;
