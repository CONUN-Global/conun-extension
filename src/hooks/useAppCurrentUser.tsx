import { useQuery } from "react-query";

import instance from "../axios/instance";

const getCurrentUser = async () => {
  const { data } = await instance.get("/users/me");
  return data;
};

function useAppCurrentUser() {
  const { data, isLoading, refetch } = useQuery("currentUser", getCurrentUser, {
    enabled: false,
  });

  return { currentUser: data?.payload ?? null, isLoading, refetch };
}

export default useAppCurrentUser;
