import useStore from "../store/store";

import { setAuthHeader } from "./getAuthHeader";

function handleLogin(token: string) {
  setAuthHeader(token);
  useStore.setState({ isAuthenticated: true });
}

export default handleLogin;
