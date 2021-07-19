import { AUTH_TOKEN } from "../const";
import useStore from "../store/store";

function handleLogin(token: string) {
  localStorage.setItem(AUTH_TOKEN, token);
  useStore.setState({ isAuthenticated: true });
}

export default handleLogin;
