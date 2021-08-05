// import { useQuery } from "react-query";

// const getProfile = async () => {
//   const user = await api.getProfile();

//   return user;
// };

// type CurrentUser = {
//   name: string;
//   email: string;
//   picture: string;
//   givenName: string;
// };

function useCurrentUser() {
  // const { data, isLoading } = useQuery("current-user", getProfile);

  // const currentUser: CurrentUser =
  //   { ...data, givenName: data?.given_name } || null;

  return {
    currentUser: {
      name: "Ivan Saldano",
      email: "ivanms1@gmail.com",
      picture: "https://i.pravatar.cc/300",
      givenName: "Ivan",
    },
    isLoading: false,
  };
}

export default useCurrentUser;
