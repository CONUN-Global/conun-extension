import { useQuery } from "react-query";

import useStore from "../store/store";
import useCurrentUser from "./useCurrentUser";

import instance from "../axios/instance";

const checkUser = async (email: string) => {
  const { data } = await instance.get(`/users/check/?email=${email}`);

  return data;
};

function useCheckEmail() {
  const { currentUser, isLoading: currentUserLoading } = useCurrentUser();
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);

  const { data, isLoading } = useQuery(
    "check-user",
    () => checkUser(currentUser?.email),
    {
      enabled: !currentUserLoading && !!currentUser?.email,
      onSuccess: (data) => {
        setIsAuthenticated(data?.success);
      },
    }
  );

  return {
    isAlreadyUser: data?.success,
    isLoading,
  };
}

export default useCheckEmail;
