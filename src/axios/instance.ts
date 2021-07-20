import axios from "axios";

const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 60000,
});

instance.interceptors.request.use(
  (config) => {
    const token = "";

    if (token) {
      config.headers["x-auth-token"] = token;
    } else {
      delete instance.defaults.headers["x-auth-token"];
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default instance;
